const http = require('http');
const cookieParser = require('cookie-parser');

const app = http.createServer((req, res) => {
    let cookie = req.headers.cookie;
    if(cookie === undefined) {
        cookie = 'cookie-quest=new cookie!';
    } else {
        cookie = 'cookie-quest=updated cookie!';
    }

    res.writeHead(200, {
        'Set-Cookie': cookie,
        'Content-Type': 'text/plain'
      });

	res.end('Hello world');
});

module.exports = app;
