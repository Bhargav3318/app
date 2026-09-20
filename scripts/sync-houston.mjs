import fs from 'node:fs/promises';

const source='https://houstontx.gov/planning/Publications/listsrv/WebeReport.html';
const html=await (await fetch(source)).text();
const text=value=>value.replace(/<br\s*\/?\s*>/gi,' ').replace(/<[^>]+>/g,' ').replace(/&nbsp;/gi,' ').replace(/&amp;/gi,'&').replace(/&#39;/g,"'").replace(/&quot;/gi,'"').replace(/\s+/g,' ').trim();
const records=[...html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map(row=>[...row[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map(cell=>text(cell[1]))).filter(c=>/^\d{5}$/.test(c[0]||'')&&c.length>=6).map(c=>({zip:c[0],issued:c[1],type:c[2],number:c[3],address:c[4],description:c.slice(5).join(' ')}));
if(records.length<20)throw new Error(`Houston source returned only ${records.length} usable records`);
await fs.mkdir(new URL('../data/',import.meta.url),{recursive:true});
await fs.writeFile(new URL('../data/houston.json',import.meta.url),JSON.stringify({source,retrievedAt:new Date().toISOString(),coverage:'City weekly Permit Activity Report',records},null,2)+'\n');
console.log(`Saved ${records.length} Houston records`);
