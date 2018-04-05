

all: theme public;

theme: themes/ttp;

themes/%: themes/%/node_modules themes/%/src/*
	cd $@; npm run prod;
	touch $@;

themes/%/node_modules: themes/%/package.json
	cd $@/..; npm install;	
	touch $@;

public:
	hugo;