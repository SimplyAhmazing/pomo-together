# folders
SRC			= ./src
NM			= ./node_modules
BIN			= $(NM)/.bin
VIEWS		= ./views
JS  = ./public/javascripts

# files
MAIN		= $(VIEWS)/main.jsx
MAPFILE = bundle.min.map

all: $(JS)/bundle.min.js

## ignore css stuff
# $(BUILD)/style.min.css

$(JS)/bundle.min.js: $(JS)/bundle.js
	@$(BIN)/uglifyjs $^	\
	-o $@	\
	-c -m	\
	--source-map $(JS)/$(MAPFILE)	\
	--source-map-url ./$(MAPFILE)	\
	--comments \
	--stats \

$(JS)/bundle.js: $(VIEWS)/* $(NM)/*
	@$(BIN)/browserify -t reactify -t envify $(MAIN) -o $@

## Used to bundle CSS
# $(BUILD)/style.min.css: $(PUBLIC)/css/normalize.css $(PUBLIC)/css/skeleton.css $(PUBLIC)/css/custom.css
# 	$(BIN)/cleancss $^ -o $@ -d

clean:
	@$(RM) $(JS)/*

.PHONY: all clean

# git pull --rebase origin master && git reset --hard origin/master && pm2 delete schema-check && NODE_ENV=production PORT=8008 DEBUG=schema-check:* pm2 start -x ./bin/server --name "schema-check"
