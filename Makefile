all: theme public;

theme: static/css;

static/css:
	npm run prod;
.PHONY: static/css

node_modules: package.json package-lock.json
	npm install;	
	touch $@;

public:
	hugo;