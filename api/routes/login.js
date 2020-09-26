var bCrypt = require('bcrypt-nodejs');
const jwt = require('json-web-token')
const bodyParser = require("body-parser");
const {issueJWT} = require("../lib/jwtIssuer");

module.exports = function (app,passport)
{
    /*
    app.post('/register', passport.authenticate('local-signup', {
            successRedirect: '/successreg',
            failureRedirect: '/failreg'
        }
    ));*/
    app.post('/LoginFormWindow', function(req, res, next) {
        passport.authenticate('local-signin', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { res.status(200).json({success:false,err:'no user'})}
            req.logIn(user, function(err) {
                if (err) {
                    return next(err); }
                else {
                    const tokenObject = issueJWT(user);
                    res.status(200).json({ success: true, token: tokenObject.token, expiresIn: tokenObject.expires });
                }
            });
        })(req, res, next);
    });
}
