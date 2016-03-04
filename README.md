This small node project is created so that we can easily test individual
endpoints that require cookies from login. At the moment two cookies to be
retrieved from the login are supported. 

# Setup

npm install

# Usage

node index.js user password http://127.0.0.1:8080/login http://127.0.0.1:8080/yourcoolendpoint header-name cookie1 cookie2

## Clarification of the arguments

user & password: username and password to be used in the login url

urls: First url is the login url, second the url that you want to call.

header-name: replace with the header that contains cookies you are interested
in.

cookie1 & cookie2: names of the cookies to be taken from login to the new request to
the second url.


