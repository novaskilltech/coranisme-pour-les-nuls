const https = require('https');

const host = 'anti-coranisme.novaskill.tech';

const testUrls = [
  '/',
  '/index.html',
  '/arguments/1-coran-complet',
  '/arguments/1-coran-complet.html',
  '/js/app.js',
  '/css/style.css',
  '/pdf/Comment_demasquer_et_refuter_la_secte_des_coranistes_Argument_1.pdf',
  '/robots.txt',
  '/sitemap.xml',
  '/non-existent-page-404',
  '/.env',
  '/.env.local',
  '/.git/config',
  '/.vercel/project.json',
  '/backup.zip',
  '/database.sql'
];

async function checkUrl(p, method = 'GET') {
  return new Promise((resolve) => {
    const req = https.request({
      hostname: host,
      path: p,
      method: method,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => {
        if (data.length < 500) data += chunk;
      });
      res.on('end', () => {
        resolve({
          path: p,
          method: method,
          statusCode: res.statusCode,
          contentType: res.headers['content-type'] || 'NONE',
          hsts: res.headers['strict-transport-security'] || 'MISSING',
          csp: res.headers['content-security-policy'] || 'MISSING',
          xcto: res.headers['x-content-type-options'] || 'MISSING',
          xfo: res.headers['x-frame-options'] || 'MISSING',
          referrerPolicy: res.headers['referrer-policy'] || 'MISSING',
          permissionsPolicy: res.headers['permissions-policy'] || 'MISSING',
          coop: res.headers['cross-origin-opener-policy'] || 'MISSING',
          corp: res.headers['cross-origin-resource-policy'] || 'MISSING'
        });
      });
    });
    req.on('error', (err) => resolve({ path: p, method, error: err.message }));
    req.end();
  });
}

async function run() {
  console.log(`=== CONTRE-AUDIT MULTI-ROUTES & HEADERS AVEC USER-AGENT STANDARD : https://${host} ===\n`);
  for (const u of testUrls) {
    const r = await checkUrl(u);
    console.log(`[${r.statusCode}] ${u} -> Type: ${r.contentType}`);
    if (u === '/') {
      console.log('\n--- HEADERS DE SÉCURITÉ REÇUS SUR / ---');
      console.log('CSP:', r.csp);
      console.log('HSTS:', r.hsts);
      console.log('X-Content-Type-Options:', r.xcto);
      console.log('X-Frame-Options:', r.xfo);
      console.log('Referrer-Policy:', r.referrerPolicy);
      console.log('Permissions-Policy:', r.permissionsPolicy);
      console.log('COOP:', r.coop);
      console.log('CORP:', r.corp);
      console.log('--------------------------------------\n');
    }
  }
}

run();
