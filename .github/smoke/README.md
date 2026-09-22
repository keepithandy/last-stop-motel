# Repository integrity smoke

These checks protect repository structure only; they do not change or validate application, game, UI, or content behavior.

Run all checks locally with:

```bash
node .github/smoke/run-integrity.mjs
```

`integrity-manifest.json` defines the runtime and minimum check count. The runner discovers each `.mjs` guard in this directory except itself and fails on the first non-zero exit code.
