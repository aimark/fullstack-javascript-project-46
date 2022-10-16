install: # запуск
	npm ci

start: # запустить приложение
	node bin/gendiff.js

publish: # выполнить
	npm publish --dry-run

test: #?? npm test -- --watch
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

.PHONY: test