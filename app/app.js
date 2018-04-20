const http = require('http');
const cookieHandler = require('./cookie-handler');

const app = http.createServer((req, res) => {
    let cookie = req.headers.cookie;

    if (cookie === undefined) {
        cookie = cookieHandler.createCookie('cookie-quest', {data:'new cookie!'});
    } else {
        data = cookieHandler.parseCookie(cookie);
        if (data.action !== undefined) {
            cookie = cookieHandler.createCookie('cookie-quest', {data: 'updated cookie!'});
        }
    }

    res.writeHead(204, {'Set-Cookie': cookie});
	res.end();
});

module.exports = app;
