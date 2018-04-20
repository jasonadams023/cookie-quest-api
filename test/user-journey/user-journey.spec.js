const request = require('supertest');
const app = require('../../app/app');
const cookieHandler = require('../../app/cookie-handler');

const newCookie = ['cookie-quest={"data":"new cookie!"}'];
const cookieToUpdate = ['cookie-quest={"data":"new cookie!", "action":"action!"}'];
const updatedCookie = ['cookie-quest={"data":"updated cookie!"}'];

describe('User Journey', () => {
    it('should go through the happy path', async () => {
        const agent = request(app);

        //request without cookie, gets back a new cookie
        let response = await agent.get('/');
        expect(response.headers['set-cookie']).toEqual(newCookie);

        //request with a cookie with nothing to change returns same cookie
        response = await agent.get('/')
        .set('Cookie', newCookie);
        expect(response.headers['set-cookie']).toEqual(newCookie);

        //request with a cookie and something to change returns an updated cookie
        response = await agent.get('/')
        .set('Cookie', cookieToUpdate);
        expect(response.headers['set-cookie']).toEqual(updatedCookie);
    });
});