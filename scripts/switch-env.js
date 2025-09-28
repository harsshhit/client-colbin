#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const environment = args[0] || 'development';

const envFiles = {
  development: '.env.local',
  production: '.env.production'
};

const envFile = envFiles[environment];

if (!envFile) {
  console.error('Invalid environment. Use: development or production');
  process.exit(1);
}

const envPath = path.join(__dirname, '..', envFile);
const defaultEnvPath = path.join(__dirname, '..', '.env');

if (!fs.existsSync(envPath)) {
  console.error(`Environment file ${envFile} not found.`);
  process.exit(1);
}

// Copy the environment file to .env
fs.copyFileSync(envPath, defaultEnvPath);

console.log(`✅ Switched to ${environment} environment`);
console.log(`📁 Using ${envFile}`);
console.log(`🔧 Run 'npm run dev' to start with new environment`);
