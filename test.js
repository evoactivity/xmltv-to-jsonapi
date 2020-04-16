const fs = require('fs');
const test = require('ava');
const xmltvToJsonapi = require('.');

const epg = fs.readFileSync('examples/epg.xml', 'utf-8');
const jsonVersion = fs.readFileSync('examples/epg.json', 'utf-8');

test('main', async (t) => {
  const result = await xmltvToJsonapi(epg);

  t.deepEqual(JSON.parse(result), JSON.parse(jsonVersion));
});
