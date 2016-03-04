var login = require('./login.js'),
    call = require('./call.js'),
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
        call.getCookiesAndGetEndpoint(loginCookies, endpointUrl, function(error, body) {
        });
    }
});

