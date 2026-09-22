import { readdir, readFile } from 'node:fs/promises';import { extname, join } from 'node:path';
const ROOT=process.cwd(),SKIP=new Set(['.git','node_modules','dist','build','coverage']),EXTS=new Set(['.js','.mjs','.cjs','.ts','.tsx','.jsx','.json','.html','.css','.md','.yml','.yaml','.txt','.py','.sh','.ps1']),failures=[];
async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){if(SKIP.has(e.name))continue;const f=join(dir,e.name);if(e.isDirectory()){await walk(f);continue;}if(!EXTS.has(extname(e.name).toLowerCase()))continue;if((await readFile(f)).includes(0))failures.push(f.slice(ROOT.length+1));}}
await walk(ROOT);if(failures.length){console.error(`NUL bytes found in text files: ${failures.join(', ')}`);process.exit(1);}console.log('smoke:no-nul-text passed');
