const https = require('https');

const host = 'anti-coranisme.novaskill.tech';
const paths = [
  '/',
  '/.env',
  '/.env.local',
  '/.git/config',
  '/.git/HEAD',
  '/.vercel/project.json',
  '/package.json',
  '/.DS_Store',
  '/backup.zip',
  '/database.sql',
  '/arguments/1-coran-complet',
  '/arguments/1-coran-complet.html',
  '/assets/og-image.jpg',
  '/pdf/Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_1.pdf'
];

async function checkPath(p) {
  return new Promise((resolve) => {
    const req = https.request({
      hostname: host,
      path: p,
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    }, (res) => {
      resolve({
        path: p,
        statusCode: res.statusCode,
        headers: res.headers
      });
    });
    req.on('error', (err) => resolve({ path: p, error: err.message }));
    req.end();
  });
}

async function run() {
  console.log(`=== AUDIT HTTP EN PRODUCTION : https://${host} ===\n`);
  for (const p of paths) {
    const r = await checkPath(p);
    if (r.error) {
      console.log(`❌ ${p} -> ERROR: ${r.error}`);
    } else {
      console.log(`[${r.statusCode}] ${p}`);
      if (p === '/') {
        console.log('\n--- EN-TÊTES DE SÉCURITÉ REÇUS (/) ---');
        console.log('X-Content-Type-Options:', r.headers['x-content-type-options'] || 'MISSING ⚠️');
        console.log('X-Frame-Options:', r.headers['x-frame-options'] || 'MISSING ⚠️');
        console.log('X-XSS-Protection:', r.headers['x-xss-protection'] || 'MISSING ⚠️');
        console.log('Content-Security-Policy:', r.headers['content-security-policy'] || 'MISSING ⚠️');
        console.log('Referrer-Policy:', r.headers['referrer-policy'] || 'MISSING ⚠️');
        console.log('Permissions-Policy:', r.headers['permissions-policy'] || 'MISSING ⚠️');
        console.log('Strict-Transport-Security:', r.headers['strict-transport-security'] || 'MISSING ⚠️');
        console.log('Cross-Origin-Opener-Policy:', r.headers['cross-origin-opener-policy'] || 'MISSING ⚠️');
        console.log('Cross-Origin-Resource-Policy:', r.headers['cross-origin-resource-policy'] || 'MISSING ⚠️');
        console.log('Access-Control-Allow-Origin:', r.headers['access-control-allow-origin'] || 'NONE');
        console.log('Server:', r.headers['server'] || 'NONE');
        console.log('-------------------------------------\n');
      }
    }
  }
}

run();
