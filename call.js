var request = require('request'),
    cookies = require('./cookies.js');

module.exports = {

    getCookiesAndPostEndpoint: function (loginCookies, endpointUrl, done) {
        cookies.cookies(loginCookies, cookie1, cookie2, endpointUrl, function (cookiejar) {
            callEndpoint(cookiejar, endpointUrl, true);
        });
        return done;
    },
    getCookiesAndGetEndpoint: function (loginCookies, endpointUrl) {
        cookies.cookies(loginCookies, cookie1, cookie2, endpointUrl, function (cookiejar) {
            callEndpoint(cookiejar, endpointUrl, false);
        });
    }
}

function callEndpoint(cookiejar, url, post) {
    console.log("---------------------------------");
    console.log("Calling " + url);

    var qs = {};

    if (post) {
        request.post({url: url, jar: cookiejar, qs: qs}, function (error, response, body) {
            processResponse(error, response, body);
        })
    } else {
        request({url: url, jar: cookiejar, qs: qs}, function (error, response, body) {
            processResponse(error, response, body);
        })
    }
}

function processResponse(error, response, body) {
    if (error) {
        console.log(error);
        return error;
    } else {
        console.log("----------- Response ----------")
        console.log(response.statusCode, body);
        return body;
    }
}