var login = require('./lib/login.js'),
    call = require('./lib/call.js');

module.exports = function post(user, password, loginUrl, endpointUrl, header, cookie1, cookie2) {
    login(loginUrl, user, password, header, function(error, loginCookies) {
        if (error) {
            console.log(error);
        } else {
            console.log("Cookies from login: " + loginCookies);
            call.getCookiesAndPostEndpoint(loginCookies, endpointUrl, cookie1, cookie2, function(error, body) {
            });
        }
    });
}



