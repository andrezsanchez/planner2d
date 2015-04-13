main:
	browserify index.js -t [ reactify --es6 --target es5 ] -o bundle.js
watch:
	watchify index.js -t [ reactify --es6 --target es5 ] -o bundle.js
serve:
	http-server .
.PHONY: main watch serve
