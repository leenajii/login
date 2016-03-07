var request = require('request');

module.exports = function login (loginUrl, user, password, cookie, done) {

    console.log("Logging in " + user);
    request.post({url: loginUrl, form: {email: user, password: password}}
        , function (error, response, body) {
            if (error) {
                console.log(error);
                done(error);
            } else {
                console.log(response.statusCode, body);
                done(null, response.headers[cookie]);
            }
        });
}