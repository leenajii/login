var request = require('request');

module.exports = function cookies(cookies, cookie1Name, cookie2Name, url, done) {
    var cookie1 = '',
        cookie2 = '';

    cookies.forEach(function(cookie) {
        var cookieArr = cookie.split(";");

        cookieArr.forEach(function (c) {
            if (c.indexOf(cookie1Name) > -1) {
                cookie1 = c;
            }
            if (c.indexOf(cookie2Name) > -1) {
                cookie2 = c;
            }
        });
    });
    return done(cookiejar({cookie1: cookie1, cookie2: cookie2}, url));
}

function cookiejar(cookiemap, url) {
    var j = request.jar();

    Object.keys(cookiemap).forEach(function (key) {
        console.log("Setting cookie to request: " + cookiemap[key])
        j.setCookie(cookiemap[key], url);
    });

    return j;
}