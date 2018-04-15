all: theme public;

theme: layout/partials/head.html;

layout/partials/head.html: node_modules
	npm run prod;

node_modules: package.json package-lock.json
	npm install;	
	touch $@;

public:
	hugo;