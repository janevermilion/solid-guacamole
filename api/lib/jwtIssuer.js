const jsonwebtoken = require('jsonwebtoken');
let PRIV_KEY = require('../config/keys').private;
function issueJWT(user) {

    const _id = user.id;
    const _email = user.email;
    const pass = user.password;
    const expiresIn = '1d';

    const payload = {
        id: _id,
        email: _email,
        password: pass,
        iat: Date.now()
    };

    const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, { expiresIn: expiresIn, algorithm: 'RS256' });

    return {
        token: "Bearer " + signedToken,
        expires: expiresIn
    }
}

module.exports = {issueJWT}