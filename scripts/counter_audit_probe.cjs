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
  '/non-existent-page-404',
  '/.env',
  '/.env.local',
  '/.env.production',
  '/.git/config',
  '/.git/HEAD',
  '/.vercel',
  '/.vercel/project.json',
  '/backup.zip',
  '/source.zip',
  '/database.sql',
  '/db.sql',
  '/.DS_Store',
  '/package.json',
  '/package-lock.json',
  '/app.js.map',
  '/style.css.map',
  '/admin',
  '/api'
];

async function checkUrl(p, method = 'GET') {
  return new Promise((resolve) => {
    const req = https.request({
      hostname: host,
      path: p,
      method: method,
      headers: {
        'User-Agent': 'NOVASQUAD-CounterAudit/2.0'
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
          corp: res.headers['cross-origin-resource-policy'] || 'MISSING',
          cacheControl: res.headers['cache-control'] || 'NONE',
          contentDisposition: res.headers['content-disposition'] || 'NONE',
          bodySnippet: data.substring(0, 150).replace(/\r?\n|\r/g, ' ')
        });
      });
    });
    req.on('error', (err) => resolve({ path: p, method, error: err.message }));
    req.end();
  });
}

async function testMethods() {
  console.log('\n=== TEST DES MÉTHODES HTTP SUR LA RACINE ===');
  const methods = ['GET', 'HEAD', 'OPTIONS', 'POST', 'PUT', 'PATCH', 'DELETE', 'TRACE'];
  for (const m of methods) {
    const res = await checkUrl('/', m);
    console.log(`[${res.statusCode || 'ERR'}] ${m} / -> Content-Type: ${res.contentType}`);
  }
}

async function run() {
  console.log(`=== CONTRE-AUDIT MULTI-ROUTES & FICHIERS SENSIBLES : https://${host} ===\n`);
  for (const u of testUrls) {
    const r = await checkUrl(u);
    console.log(`[${r.statusCode}] ${u} (Type: ${r.contentType})`);
  }
  await testMethods();
}

run();
