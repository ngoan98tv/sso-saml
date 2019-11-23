const express = require("express");
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const saml = require('passport-saml');
const app = express();

const samlConfig = require('./samlConfig');
const passportConfig = require('./passportConfig');
const render = require('./render');

const samlStrategy = new saml.Strategy(samlConfig, function(profile, done) {
    return done(null, {
        id: profile.uid,
        nameID: profile.nameID,
        nameIDFormat: profile.nameIDFormat,
        email: profile.email,
        group: profile.eduPersonAffiliation
    });
});

passportConfig(passport, samlStrategy);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'secret', 
    resave: false, 
    saveUninitialized: true,
}));
app.use(passport.initialize({}));
app.use(passport.session({}));

app.get('/', function(req, res) {
    res.send(render(req.user));
});

app.get('/login', passport.authenticate('samlStrategy'));

app.get('/logout', passport.logout);

app.post('/login/callback', passport.authenticate('samlStrategy'),
    function (req, res) {
        res.redirect('/');
    }
);

var server = app.listen(8001, function () {
    console.log('Listening on http://localhost:%d', server.address().port);
});