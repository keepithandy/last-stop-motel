import { build } from 'esbuild';
import { mkdir,copyFile,readFile,writeFile } from 'node:fs/promises';
await mkdir('dist/assets',{recursive:true});
await build({entryPoints:['src/main.js'],bundle:true,format:'iife',target:['es2020'],outfile:'dist/assets/game.js',minify:true,legalComments:'eof',sourcemap:false});
await copyFile('node_modules/three/LICENSE','dist/THREE-LICENSE.txt');
const pkg=JSON.parse(await readFile('package.json','utf8'));
await writeFile('dist/VERSION.txt',`Last Stop Motel ${pkg.version}\nThree.js ${pkg.dependencies.three}\nAll game assets included. No network connection required.\n`);
console.log('Last Stop Motel: complete offline release built.');
