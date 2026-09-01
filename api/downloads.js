/**
 * Vercel Serverless Function - Compteur de Téléchargements du Livre "Le Coraniste Repenti" (PDF)
 * Point de terminaison : /api/downloads
 * Base de départ définie : 3 480 téléchargements + incréments en temps réel.
 * Conforme RGPD : Zéro cookie, zéro IP stockée, 100% anonyme.
 */

const https = require('https');

const BASE_DOWNLOADS = 3480;
let cachedCount = BASE_DOWNLOADS;
let localIncrements = 0;
let lastFetchTime = 0;

function fetchDownloadBadgeCount() {
  return new Promise((resolve) => {
    try {
      const req = https.get(
        'https://api.visitorbadge.io/api/visitors?path=anti-coranisme-coraniste-repenti-pdf-downloads',
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
                  return resolve(BASE_DOWNLOADS + parsed);
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

function recordHit() {
  try {
    const req = https.get(
      'https://api.visitorbadge.io/api/visitors?path=anti-coranisme-coraniste-repenti-pdf-downloads',
      { timeout: 1500 },
      () => {}
    );
    req.on('error', () => {});
  } catch (e) {}
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

  // Si c'est un POST ou un appel de tracking d'action de téléchargement
  if (req.method === 'POST' || (req.query && req.query.action === 'download')) {
    localIncrements++;
    cachedCount++;
    recordHit();
  }

  const now = Date.now();
  if (now - lastFetchTime > 3000) {
    const live = await fetchDownloadBadgeCount();
    if (live && live >= cachedCount) {
      cachedCount = live + localIncrements;
      lastFetchTime = now;
    } else if (cachedCount < BASE_DOWNLOADS) {
      cachedCount = BASE_DOWNLOADS + localIncrements;
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
