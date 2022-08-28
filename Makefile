install: # запуск
	npm ci

start: # запустить приложение
    node bin/gendiff.js

publish: # выполнить
	npm publish --dry-run

lint:
	npx eslint .
