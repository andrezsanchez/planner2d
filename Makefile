#reactify=-t [ reactify --es6 --target es5 ]
brfs=-t brfs
es6=-t [ es6ify --debug ]

transforms=$(es6) $(brfs)
source=index.js
dest=bundle.js

main:
	#-browserify $(source) $(transforms) -o $(dest)
	node ./build.js > $(dest)
watch:
	#-watchify $(source) $(transforms) -o $(dest)
	node ./build.js -w
serve:
	http-server .

.PHONY: main watch serve
