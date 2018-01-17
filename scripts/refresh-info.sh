#! /bin/bash
set -e
node scripts/apis-guru.js --info_only
node scripts/get-logos.js
./scripts/push-logos.sh
node scripts/generate-json.js
node scripts/readmes/generate-readmes.js
