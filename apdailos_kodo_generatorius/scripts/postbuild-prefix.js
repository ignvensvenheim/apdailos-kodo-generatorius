#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');

if (!fs.existsSync(distDir)) {
  console.error('dist not found at', distDir);
  process.exit(1);
}

const exts = new Set(['.html', '.css', '.js', '.svg', '.json', '.txt', '.map']);
let modified = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      walk(full);
    } else {
      const ext = path.extname(e.name).toLowerCase();
      if (!exts.has(ext)) continue;
      let data = fs.readFileSync(full, 'utf8');
      const orig = data;
      data = data
        .replace(/(["'])\/(?!CCG\/)/g, '$1/CCG/')
        .replace(/url\(\s*(["']?)\/(?!CCG\/)/g, 'url($1/CCG/')
        .replace(/<base\s+href=(["'])\/(?!CCG\/)/ig, '<base href=$1/CCG/');
      if (data !== orig) {
        fs.writeFileSync(full, data, 'utf8');
        modified.push(path.relative(projectRoot, full));
      }
    }
  }
}

walk(distDir);

if (modified.length === 0) {
  console.log('No files modified.');
} else {
  console.log('Modified files:');
  for (const f of modified) console.log(' -', f);
}

console.log('Done.');
