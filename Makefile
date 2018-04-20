all: theme public;

theme: static/css;

static/css:
	npm run prod;
	cd static/css; ls | xargs -I {} ../../node_modules/.bin/purgecss \
		--css {} --content ../../layouts/**/*.html --out .

	cd static/css; ls | xargs -I {} ../../node_modules/.bin/uglifycss \
		{} --output {}
.PHONY: static/css

node_modules: package.json package-lock.json
	npm install;	
	touch $@;

public:
	hugo;