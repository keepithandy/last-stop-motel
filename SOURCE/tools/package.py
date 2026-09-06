"""Create a self-contained playable ZIP with the exact development source."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import hashlib,json,shutil
root=Path(__file__).resolve().parents[1]
version=json.loads((root/'package.json').read_text())['version']
output=root/'release'/f'Last-Stop-Motel-{version}.zip'
output.parent.mkdir(exist_ok=True)
for name in ['README.md','RELEASE-NOTES.md']:
 shutil.copy2(root/name,root/'dist'/name)
manifest={}
with ZipFile(output,'w',ZIP_DEFLATED,compresslevel=9) as archive:
 def add(path,arcname):
  data=path.read_bytes();archive.writestr(arcname,data)
  manifest[arcname]={'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()}
 for path in sorted((root/'dist').rglob('*')):
  if path.is_file() and 'qa' not in path.relative_to(root/'dist').parts:add(path,path.relative_to(root/'dist').as_posix())
 for folder in ['src','tools','tests','dist']:
  for path in sorted((root/folder).rglob('*')):
   if path.is_file() and '__pycache__' not in path.parts and path.name not in {'package-mobile.mjs','zip-mobile.py'}:add(path,'SOURCE/'+path.relative_to(root).as_posix())
 for name in ['package.json','package-lock.json','README.md','RELEASE-NOTES.md','vite.config.js']:
  add(root/name,'SOURCE/'+name)
 archive.writestr('FILE-MANIFEST.json',json.dumps(manifest,indent=2)+'\n')
with ZipFile(output) as archive:
 assert archive.testzip() is None
 assert 'index.html' in archive.namelist()
 assert 'assets/game.js' in archive.namelist()
 assert 'SOURCE/src/engine.js' in archive.namelist()
 assert not any('/node_modules/' in n or '/.env' in n for n in archive.namelist())
 for name,entry in manifest.items():
  data=archive.read(name)
  assert len(data)==entry['bytes'] and hashlib.sha256(data).hexdigest()==entry['sha256']
print(json.dumps({'file':str(output),'bytes':output.stat().st_size,'files':len(manifest)+1,'sha256':hashlib.sha256(output.read_bytes()).hexdigest()},indent=2))
