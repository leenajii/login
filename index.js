var post = require("./post.js"),
    get = require("./get.js"),
    args = process.argv.slice(2),
    user = args[0],
    password = args [1],
    loginUrl = args[2],
    endpointUrl = args[3]
    header = args [4]
    cookie1 = args [5]
    cookie2 = args [6];

post(user, password, loginUrl, endpointUrl, header, cookie1, cookie2);