import { execSync } from 'node:child_process';
import { existsSync, rmSync, cpSync, mkdirSync } from 'node:fs';
import { resolve, join } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const DIST = join(ROOT, 'dist');
const TMP = join(ROOT, '.gh-pages-tmp');

function run(cmd, opts = {}) {
  console.log(`  > ${cmd}`);
  return execSync(cmd, { cwd: ROOT, stdio: 'inherit', ...opts });
}

function runSilent(cmd, cwd) {
  try {
    execSync(cmd, { cwd, stdio: 'pipe' });
    return true;
  } catch {
    return false;
  }
}

function runCapture(cmd, cwd) {
  return execSync(cmd, { cwd, encoding: 'utf8', stdio: 'pipe' }).trim();
}

if (!existsSync(DIST)) {
  console.error('dist/ folder not found. Run "npm run build" first.');
  process.exit(1);
}

// Clean up previous temp
if (existsSync(TMP)) {
  rmSync(TMP, { recursive: true, force: true });
}

try {
  // Check if gh-pages exists on remote
  const hasGhPages = runSilent('git ls-remote --heads origin gh-pages', ROOT);
  console.log(`gh-pages branch on remote: ${hasGhPages ? 'yes' : 'no (first deploy)'}`);

  mkdirSync(TMP, { recursive: true });

  // Initialize a fresh git repo in temp
  run('git init', { cwd: TMP });
  run('git checkout --orphan gh-pages', { cwd: TMP });

  // Clear everything (should be empty already with --orphan)
  const entries = execSync('cmd /c "dir /b /a"', { cwd: TMP, encoding: 'utf8' })
    .split(/[\r\n]+/)
    .filter(Boolean);
  for (const entry of entries) {
    if (entry === '.git') continue;
    const p = join(TMP, entry);
    rmSync(p, { recursive: true, force: true });
  }

  // Copy dist contents into temp
  console.log('Copying build files...');
  const distEntries = execSync('cmd /c "dir /b /a"', { cwd: DIST, encoding: 'utf8' })
    .split(/[\r\n]+/)
    .filter(Boolean);
  for (const entry of distEntries) {
    const src = join(DIST, entry);
    cpSync(src, join(TMP, entry), { recursive: true });
  }

  // Add, commit
  run('git add --all', { cwd: TMP });
  run('git commit -m "Deploy"', { cwd: TMP });

  // Get the remote URL
  const remoteUrl = runCapture('git remote get-url origin', ROOT);
  console.log(`Pushing to: ${remoteUrl}`);

  // Always force push (works for both first deploy and updates)
  run(`git push --force "${remoteUrl}" gh-pages`, { cwd: TMP });

  console.log('\nDeploy successful!');
} finally {
  if (existsSync(TMP)) {
    rmSync(TMP, { recursive: true, force: true });
  }
}