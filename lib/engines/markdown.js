var md = require( "node-markdown" ).Markdown
	, fs = require( "fs" )
	;

exports.render = function( str, options, fn ) {
	if( "function" === typeof options ) {
		fn = options, options = {};
	}

	// -----------------------------------------------------
	// [todo] Enable caching with options.cache and options.filename [/todo]
	// -----------------------------------------------------

	try {
		fn( null, md( str ) );
	} catch( err ) {
		fn( err);
	}
};

exports.renderFile = function( path, options, fn ) {
  if ("function" === typeof options) {
    fn = options, options = {};
  }

	try {
		var str = fs.readFileSync( path, "utf8" );
		exports.render( str, options, fn );
	} catch( err ) {
		fn( err );
	}
};

// -----------------------------------------------------
// Express support
// -----------------------------------------------------
exports.__express = exports.renderFile;
