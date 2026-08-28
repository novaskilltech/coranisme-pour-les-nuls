/**
 * Vercel Serverless Function - Visites Anonymisées
 * Point de terminaison : /api/visits
 * Base de départ définie par l'auteur : 14 725 visites + visites en temps réel.
 * Conforme RGPD : Zéro cookie, zéro IP stockée, 100% anonyme.
 */

const https = require('https');

const BASE_VISITS = 14725;
let cachedCount = BASE_VISITS;
let lastFetchTime = 0;

function fetchVisitorBadgeCount() {
  return new Promise((resolve) => {
    try {
      const req = https.get(
        'https://api.visitorbadge.io/api/visitors?path=anti-coranisme-novaskill-tech',
        { timeout: 2500 },
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
                  // Base auteur (14 725) + visites réelles enregistrées
                  return resolve(BASE_VISITS + parsed);
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
  if (now - lastFetchTime > 3000) {
    const live = await fetchVisitorBadgeCount();
    if (live && live >= cachedCount) {
      cachedCount = live;
      lastFetchTime = now;
    } else if (cachedCount < BASE_VISITS) {
      cachedCount = BASE_VISITS;
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
