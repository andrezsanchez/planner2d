REACTIFY=-t [ reactify --es6 --target es5 ]
BRFS=-t brfs

TRANSFORMS=$(REACTIFY) $(BRFS)

main:
	browserify index.js $(TRANSFORMS) -o bundle.js
watch:
	watchify index.js $(TRANSFORMS) -o bundle.js
serve:
	http-server .
.PHONY: main watch serve
