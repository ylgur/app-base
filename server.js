/*
|--------------------------------------------------------------------------
| Requirements
|--------------------------------------------------------------------------
*/
var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs')
  , app = module.exports = express();

/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
*/
app.configure(function(){
  app.set('port', process.env.PORT || 3700);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon('public/favicon.ico'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('brand-new-secret-key'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/
fs.readdirSync("./routes").forEach(function( route ) {
  require("./routes/" + route);
});

/*
|--------------------------------------------------------------------------
| Server
|--------------------------------------------------------------------------
*/
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});