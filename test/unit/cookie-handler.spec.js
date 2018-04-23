const cookieHandler = require('../../app/cookie-handler');

describe('CookieHandler', () => {
    it('should be able to create a cookie storing json', () => {
        const cookieName = 'cookie-name';
        const cookieData = {
            data: 'some data'
        };

        const cookie = cookieHandler.createCookie(cookieName, cookieData);

        expect(cookie).toEqual('cookie-name={"data":"some data"}');
    });

    it('should be able to retrieve data in a cookie stored as json', () => {
        const cookie = 'cookie-name={"data":"some data"}';

        const cookieData = cookieHandler.parseCookie(cookie);

        expect(cookieData).toEqual({data: 'some data'});
    })
})