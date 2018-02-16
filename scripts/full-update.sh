set -e
node ./scripts/apis-guru.js
node ./scripts/aws/rewrite.js
node ./scripts/bump-versions.js --bump major
node ./scripts/generate-json.js
node ./scripts/readmes/generate-readmes.js
node ./scripts/readmes/add-links.js
