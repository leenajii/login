var request = require('request');
    login = require('./login.js'),
    cookies = require('./cookies.js'),
    args = process.argv.slice(2),
    user = args[0],
    password = args [1],
    loginUrl = args[2],
    endpointUrl = args[3]
    header = args [4]
    cookie1 = args [5]
    cookie2 = args [6];



login(loginUrl, user, password, header, function(error, loginCookies) {
    if (error) {
        console.log(error);
    } else {
        console.log("Cookies from login: " + loginCookies);
        getCookiesAndCallEndpoint(loginCookies, endpointUrl);
    }
});

function getCookiesAndCallEndpoint(loginCookies, endpointUrl) {
    cookies(loginCookies, cookie1, cookie2, function(cookiemap) {
        callEndpoint(cookiemap, endpointUrl);
    });
}

function callEndpoint(cookiemap, url) {
    console.log("---------------------------------");
    console.log("Calling " + url);

    var j = request.jar(),
        qs = {};

    Object.keys(cookiemap).forEach(function (key) {
        console.log("Setting cookie to request: " + cookiemap[key])
        j.setCookie(cookiemap[key], url);
    });

    request({url: url, jar: j, qs: qs}, function (error, response, body) {
        if (error) {
            console.log(error);
        } else {
            console.log("----------- Response ----------")
            console.log(response.statusCode, body);
        }
    })
}


