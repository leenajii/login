var request = require('request');
    login = require('./login.js'),
    args = process.argv.slice(2),
    user = args[0],
    password = args [1],
    loginUrl = args[2],
    endpointUrl = args[3]
    header = args [4]
    cookie1 = args [5]
    cookie2 = args [6];

var qs = {};

login(loginUrl, user, password, header, function(error, cookies) {
    if (error) {
        console.log(error);
    } else {
        console.log("Cookies from login: " + cookies);
        callEndpoint(cookies, endpointUrl, qs);
    }
});

function callEndpoint(cookies, url, qs) {
    console.log("---------------------------------");
    console.log("Calling " + url);

    var j = request.jar(),
        cookiemap = getCookies(cookies, cookie1, cookie2);

    Object.keys(cookiemap).forEach(function(key) {
        console.log("Setting cookie to request: " + cookiemap[key])
        j.setCookie(cookiemap[key], url);
    });

    request({url: url, jar: j, qs: qs}, function (error, response, body) {
        if(error) {
            console.log(error);
        } else {
            console.log("----------- Response ----------")
            console.log(response.statusCode, body);
        }
    })
}

function getCookies(cookies, cookie1Name, cookie2Name) {
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
    return {cookie1: cookie1, cookie2: cookie2};
}

