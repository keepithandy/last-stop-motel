import { readdir, readFile } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
const here = dirname(fileURLToPath(import.meta.url));
const runner = basename(fileURLToPath(import.meta.url));
const manifest = JSON.parse(await readFile(join(here, 'integrity-manifest.json'), 'utf8'));
const checks = (await readdir(here)).filter((name) => name.endsWith('.mjs') && name !== runner).sort();
if (checks.length < manifest.minimumChecks) {
  console.error(`Expected at least ${manifest.minimumChecks} integrity checks; found ${checks.length}.`);
  process.exit(1);
}
for (const check of checks) {
  console.log(`\n[integrity] ${check}`);
  const result = spawnSync(process.execPath, [join(here, check)], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
}
console.log(`\nRepository integrity passed (${checks.length} checks).`);
