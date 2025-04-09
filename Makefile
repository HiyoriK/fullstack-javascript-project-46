<<<<<<< HEAD

make lint:
	npx eslint
=======
install:
	npm ci

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js

make lint:
	npx eslint

test:
	npm test
>>>>>>> refs/remotes/origin/main
