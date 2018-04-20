all: theme public;

theme: static/css;

static/css: node_modules
	npm run prod;
	hugo gen chromastyles --style=monokai > static/css/monokai.css

node_modules: package.json package-lock.json
	npm install;	
	touch $@;

public:
	hugo;