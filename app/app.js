const http = require('http');
const cookieHandler = require('./cookie-handler');

const app = http.createServer((req, res) => {
    let cookie = req.headers.cookie;

    if (cookie === undefined) {
        cookie = cookieHandler.createCookie('cookie-quest', {health:10});
    } else {
        const data = cookieHandler.parseCookie(cookie);
        let action = data.action;
        if (action !== undefined) {
            if (action === 'restart') {
                cookie = cookieHandler.createCookie('cookie-quest', {health:10});
            } else {
                data.health -= 5;
                data.action = undefined;
                cookie = cookieHandler.createCookie('cookie-quest', data);
            }
        }
    }

    res.writeHead(200, {'Set-Cookie': cookie});
	res.end();
});

module.exports = app;
