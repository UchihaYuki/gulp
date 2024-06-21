#!/usr/bin/env node

const fs = require('fs');
if (fs.existsSync('./gulpfile.ts')) {
  const { spawn } = require('child_process');
  const child = spawn(
    `npx tsc -p ./tsconfig.gulp.json && npx tsc-alias -p ./tsconfig.gulp.json`,
    { shell: true, stdio: 'inherit' }
  );
  child.on('exit', (code, signal) => {
    if (!code && !signal) {
      require('gulp-cli')();
    }
  });
} else {
  require('gulp-cli')();
}
