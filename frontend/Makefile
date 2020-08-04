BIN := $(shell pwd)/node_modules/.bin
BUILD_VERSION ?= 0.0.2 # in the future, handle this with Jenkins

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

# pull image from registry
pull-docker:
	docker pull jamesgu/melanholic:$(BUILD_VERSION)

# build and push image to registry
build-docker:
	docker build --tag jamesgu/melanholic:$(BUILD_VERSION) .
	docker push jamesgu/melanholic:$(BUILD_VERSION)

# run the local image
run-docker:
	echo "Preparing to run image jamesgu/melanholic:$(BUILD_VERSION)"
	docker run --name melanholic -detached -p 80:3000 jamesgu/melanholic:$(BUILD_VERSION)