install:
	npm ci

gendiff:
	node bin/gendiff.js

make lint:
	npx eslint

make test:
	npm test

