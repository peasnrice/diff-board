var config = require('./config'),
    express  = require('express'),
    morgan       = require('morgan'),
    compress = require('compression'),
    cookieParser = require('cookie-parser'),
    bodyParser   = require('body-parser'),
    session      = require('express-session'),
    passport = require('passport'),
    flash    = require('connect-flash'),
    methodOverride = require('method-override');
    
module.exports = function() {
    var app = express();
    
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'product') {
        app.use(compress());
    }
    
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser()); // read cookies (needed for auth)    

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    
    require('./passport')(passport); // pass passport for configuration
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session
    
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    
    // routes ======================================================================
    require('../app/routes/slack.server.routes')
    require('../app/routes/passport.server.routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

    
    app.use(express.static('./public'));
    
    return app;
    
}






