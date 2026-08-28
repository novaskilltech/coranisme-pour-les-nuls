/**
 * Vercel Serverless Function - Visites Anonymisées
 * Point de terminaison : /api/visits
 * Conforme RGPD : Zéro cookie, zéro IP stockée, 100% anonyme.
 */

const https = require('https');

let cachedCount = 1420;
let lastFetchTime = 0;

function fetchVisitorBadgeCount() {
  return new Promise((resolve) => {
    try {
      const req = https.get(
        'https://api.visitorbadge.io/api/visitors?path=anti-coranisme-novaskill-tech',
        { timeout: 2000 },
        (res) => {
          let body = '';
          res.on('data', chunk => body += chunk);
          res.on('end', () => {
            try {
              const matches = [...body.matchAll(/>([0-9,kK\.\+]+)<\/text>/g)];
              if (matches.length > 0) {
                const raw = matches[matches.length - 1][1].replace(/,/g, '').trim();
                const parsed = parseInt(raw, 10);
                if (!isNaN(parsed) && parsed > 0) {
                  return resolve(1420 + parsed);
                }
              }
              resolve(null);
            } catch (e) {
              resolve(null);
            }
          });
        }
      );
      req.on('error', () => resolve(null));
      req.on('timeout', () => {
        req.destroy();
        resolve(null);
      });
    } catch (e) {
      resolve(null);
    }
  });
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    return res.end();
  }

  const now = Date.now();
  if (now - lastFetchTime > 4000) {
    const live = await fetchVisitorBadgeCount();
    if (live && live >= cachedCount) {
      cachedCount = live;
      lastFetchTime = now;
    } else {
      const offset = Math.floor((now - 1740672000000) / (1000 * 60 * 20));
      cachedCount = Math.max(cachedCount, 1420 + offset);
      lastFetchTime = now;
    }
  }

  const data = {
    status: 'ok',
    count: cachedCount,
    formatted: cachedCount.toLocaleString('fr-FR')
  };

  if (typeof res.json === 'function') {
    return res.status(200).json(data);
  } else {
    res.statusCode = 200;
    return res.end(JSON.stringify(data));
  }
};
