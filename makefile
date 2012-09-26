JS = src/jquery.vault.js
OUTPUT = dist/jquery.vault.min.js

COMPILATION_LEVEL = ADVANCED_OPTIMIZATIONS

CLOSURE_COMPILER = java -jar closure/compiler.jar

minify:
	echo 'Minifying source'
	$(CLOSURE_COMPILER) --compilation_level $(COMPILATION_LEVEL) --js $(JS) --js_output_file $(OUTPUT)
