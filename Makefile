all: theme public;

theme: static/css;

static/css:
	npm run prod;
	hugo gen chromastyles --style=monokai > static/css/monokai.css

node_modules: package.json package-lock.json
	npm install;	
	touch $@;

public:
	hugo;