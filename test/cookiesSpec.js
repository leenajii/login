var expect = require("chai").expect;
var cookies = require("../cookies.js");

describe("Cookies", function(){
    describe("#getCookiemap()", function(){
        it("should return two cookies with names when given array with cookies", function(){
            var cookieArr = new Array("SESSIONID=123456789; Path=/foobar/; HttpOnly", "some_user=\"123|user@gmail.com\"; Version=1; Max-Age=1000; Expires=Wed, 08-May-2019 16:49:57 GMT; Path=/'");
            var results = cookies.getCookiemap(cookieArr, "SESSIONID", "some_user");

            expect(Object.keys(results).length).to.equal(2);

            expect(results).to.have.property('cookie1');
            expect(results).to.have.property('cookie2');

            expect(results["cookie1"]).to.equal("SESSIONID=123456789");
            expect(results["cookie2"]).to.equal("some_user=\"123|user@gmail.com\"");
        });
    });
});