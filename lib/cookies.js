var request = require('request');

module.exports = {

    cookies: function (allCookies, cookie1Name, cookie2Name, url, done) {
        var cookiemap = this.getCookiemap(allCookies, cookie1Name, cookie2Name);
        return done(this.cookiejar(cookiemap, url));
    },

    getCookiemap: function (allCookies, cookie1Name, cookie2Name) {
        var cookie1 = '',
            cookie2 = '';

        allCookies.forEach(function(cookie) {
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
        return {cookie1: cookie1, cookie2: cookie2};
    },

    cookiejar: function (cookiemap, url) {
        var j = request.jar();

        Object.keys(cookiemap).forEach(function (key) {
            console.log("Setting cookie to request: " + cookiemap[key])
            j.setCookie(cookiemap[key], url);
        });

        return j;
    }
}



