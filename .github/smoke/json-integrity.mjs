import { readdir, readFile } from 'node:fs/promises';import { extname, join } from 'node:path';
const ROOT=process.cwd(),SKIP=new Set(['.git','node_modules','dist','build','coverage']),failures=[];
async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){if(SKIP.has(e.name))continue;const f=join(dir,e.name);if(e.isDirectory()){await walk(f);continue;}if(extname(e.name).toLowerCase()!=='.json')continue;try{JSON.parse(await readFile(f,'utf8'));}catch(error){failures.push(`${f.slice(ROOT.length+1)}: ${error.message}`);}}}
await walk(ROOT);if(failures.length){console.error(`Invalid JSON found:\n- ${failures.join('\n- ')}`);process.exit(1);}console.log('smoke:json-integrity passed');
