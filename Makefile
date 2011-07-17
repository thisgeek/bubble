all: requirejs jquery
	@@echo "Build complete:"
	@@date

requirejs:
	@@wget http://requirejs.org/docs/release/0.24.0/comments/require.js \
		-P vendor

jquery:
	@@wget http://code.jquery.com/jquery-1.6.2.js \
		-P vendor

clean:
	@@rm -r vendor/*
