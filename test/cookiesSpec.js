var expect = require("chai").expect,
    cookies = require("../cookies.js"),
    cookieArr = new Array("SESSIONID=123456789; Path=/foobar/; HttpOnly", "some_user=\"123|user@gmail.com\"; Version=1; Max-Age=1000; Expires=Wed, 08-May-2019 16:49:57 GMT; Path=/'");;

describe("Cookies", function(){
    describe("#getCookiemap()", function(){
        it("should return two cookies with names when given array with cookies", function(){
            var results = cookies.getCookiemap(cookieArr, "SESSIONID", "some_user");

            expect(Object.keys(results).length).to.equal(2);

            expect(results).to.have.property('cookie1');
            expect(results).to.have.property('cookie2');

            expect(results["cookie1"]).to.equal("SESSIONID=123456789");
            expect(results["cookie2"]).to.equal("some_user=\"123|user@gmail.com\"");
        });
    });

    describe("#cookiejar()", function(){
        it("should return cookiejar", function(){
            var cookiemap = {cookie1: "SESSIONID=123456789", cookie2: "some_user=\"123|user@gmail.com\""};
            var jar = cookies.cookiejar(cookiemap, "http://url.com");

            var cookie_string = jar.getCookieString("http://url.com");
            console.log(cookie_string);

            expect(cookie_string).to.equal("SESSIONID=123456789; some_user=\"123|user@gmail.com\"");
        });
    });

    describe("#cookies()", function(){
        it("should return cookiejar when given cookies, cookie names and url", function(){
            cookies.cookies(cookieArr, "SESSIONID", "some_user", "http://url.com", function(jar) {
                var cookie_string = jar.getCookieString("http://url.com");
                console.log(cookie_string);

                expect(cookie_string).to.equal("SESSIONID=123456789; some_user=\"123|user@gmail.com\"");
            });
        });
    });
});