module.exports = function(passport, samlStrategy) {

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    passport.use('samlStrategy', samlStrategy);

    passport.logout = function(req, res) {
        samlStrategy.logout(req, function(err, request){
            if(!err){
                req.logout();
                res.redirect(request);
            }
        });
    }

}