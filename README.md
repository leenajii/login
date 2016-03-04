# Setup

npm install

# Usage

node index.js user password http://127.0.0.1:8080/login http://127.0.0.1:8080/yourcoolendpoint header-name cookie1 cookie2

First url is the login url, second the url that you want to call.

Replace header-name with the header that contains cookies you are interested
in.

cookie1 & cookie2 are the cookies to be taken from login to the new request to
the second url.


