module.exports = function (app, passport) {
    app.get('/protected', function(req, res, next) {
        passport.authenticate('jwt', {session: true}, function(err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                res.status(200).json({ success: false});
            } else
                res.status(200).json({ success: true});
        })(req, res, next);
    });
}