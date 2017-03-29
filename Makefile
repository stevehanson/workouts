default: install start

install:
	@npm install

clean:
	@echo 'clean task not implemented'

build:
	@npm run build

deployAws:
	@npm run build && node sync.js

start:
	@npm start

.PHONY: install clean build start test console
