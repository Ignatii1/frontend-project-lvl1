install: 
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm install --dry-run
lint: 
	npx eslint .
test:
	npm test
