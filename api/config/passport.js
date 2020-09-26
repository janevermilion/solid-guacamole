const LocalStrategy = require('passport-local').Strategy
const passportJWT = require('passport-jwt')
const bCrypt = require("bcrypt-nodejs");
const ExtractJwt = require("passport-jwt").ExtractJwt;
const JwtStrategy = require("passport-jwt").Strategy;
const PUB_KEY = require('../config/keys').public;
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
    secretOrKey: PUB_KEY,
    algorithms: ['RS256']
};

module.exports = function (passport, user) {
    const isValidPassword = function (userpass, password) {
        if(userpass === password)
            return true;
        return bCrypt.compareSync(password, userpass);
    }
    var User = user;
    /*
        passport.use('local-signup', new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                passReqToCallback: true // allows us to pass back the entire request to the callback
            },
            function(req, email, password, done) {
                var generateHash = function(password) {
                    return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
                };
                User.findOne({
                    where: {
                        email: email
                    }
                }).then(function(user) {
                    if (user)
                    {
                        return done(null, false, {
                            message: 'That email is already taken'
                        });
                    } else
                    {
                        var userPassword = generateHash(password);
                        var data =
                            {
                                email: email,
                                password: userPassword,
                                firstname: req.body.firstname,
                                lastname: req.body.lastname
                            };
                        User.create(data).then(function(newUser, created) {
                            if (!newUser) {
                                return done(null, false);
                            }
                            if (newUser) {
                                return done(null, newUser);
                            }
                        });
                    }
                });
            }
        ));*/

    passport.use('local-signin', new LocalStrategy(
        {
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },
        function (req, email, password, done) {
            var User = user;

            User.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                if (!user) {
                    return done(null, false, {
                        message: 'Email does not exist'
                    });
                }
                if (!isValidPassword(user.password, password)) {
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }
                var userinfo = user.get();
                return done(null, userinfo);
            }).catch(function (err) {
                console.log("Error:", err);
                return done(null, false, {
                    message: 'Something going wrong with your Signin'
                });
            });
        }
    ));

    passport.use(new JwtStrategy(options, function (jwt_payload, done) {

        // We will assign the `sub` property on the JWT to the database ID of user
        User.findOne({
            where: {
                email: jwt_payload.email
            }
        }).then(function (user) {
            if (!user) {
                return done(null, false, {
                    message: 'Email does not exist'
                });
            }
            if (!isValidPassword(jwt_payload.password, user.password)) {
                return done(null, false, {
                    message: 'Incorrect password.'
                });
            }
            var userinfo = user.get();
            return done(null, userinfo);
        }).catch(function (err) {
            console.log("Error:", err);
            return done(null, false, {
                message: 'Something going wrong with your Signin'
            });
        });
    }));

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function (id, done) {
        User.findByPk(id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });
    });
}
