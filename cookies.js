module.exports = function cookies(cookies, cookie1Name, cookie2Name, done) {
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
    return done({cookie1: cookie1, cookie2: cookie2});
}