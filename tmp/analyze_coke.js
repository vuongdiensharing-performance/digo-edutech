const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    });
  });
}

async function run() {
  console.log('Fetching Coca-Cola page...');
  const html = await fetchUrl('https://www.coca-cola.com/us/en');
  
  // Find all stylesheet links
  const linkMatches = html.matchAll(/<link[^>]+href=["']([^"']+\.css[^"']*)["'][^>]*>/gi);
  const links = [];
  for (const m of linkMatches) {
    links.push(m[1]);
  }
  console.log('CSS Links:', links);
  
  // Check style tags
  const styleMatches = html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi);
  for (const s of styleMatches) {
    const content = s[1];
    if (content.includes('--') || content.includes('font-family')) {
      console.log('Found style block with CSS vars / fonts length:', content.length);
      const lines = content.split('\n').filter(l => l.includes('--') || l.includes('font-face') || l.includes('font-family'));
      console.log(lines.slice(0, 30).join('\n'));
    }
  }

  // Also fetch the first CSS link if available
  for (let link of links) {
    if (!link.startsWith('http')) {
      link = 'https://www.coca-cola.com' + link;
    }
    console.log('Inspecting CSS:', link);
    try {
      const cssData = await fetchUrl(link);
      console.log('CSS length:', cssData.length);
      const rootMatch = cssData.match(/:root\s*\{[^}]+\}/g);
      if (rootMatch) {
        console.log('Found :root in CSS:\n', rootMatch[0].slice(0, 500));
      }
    } catch (e) {
      console.error('Error fetching css:', e.message);
    }
  }
}

run().catch(console.error);
