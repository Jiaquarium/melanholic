BIN := $(shell pwd)/node_modules/.bin
BUILD_VERSION ?= 0.0.1 # in the future, handle this with Jenkins

clean:
	rm -rf node_modules/
	rm -rf .next/
	
install-deps:
	printenv
	@echo ""
	node -v
	@echo ""
	npm -v
	@echo ""
	npm ci

dev:
	$(BIN)/next dev

build: install-deps
	$(BIN)/next build

prod: build
	$(BIN)/next start

build-docker: build
	docker build --tag melanholic/frontend-melanholic:$(BUILD_VERSION) .

run-docker:
	docker run -it test ls /home/node