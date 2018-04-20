const request = require('supertest');
const app = require('../../app/app');
const cookieHandler = require('../../app/cookie-handler');

const newCookie = ['cookie-quest={"health":10}'];
const cookieToUpdate = ['cookie-quest={"health":10, "action":"quest"}'];
const updatedCookie = ['cookie-quest={"health":5}'];
const defeatCookie = ['cookie-quest={"health":5, "action":"quest"}'];
const gameoverCookie = ['cookie-quest={"health":0}'];
const restartCookie = ['cookie-quest={"health":0, "action":"restart"}'];

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

        //should get cookie with 0 health
        response = await agent.get('/')
        .set('Cookie', defeatCookie);
        expect(response.headers['set-cookie']).toEqual(gameoverCookie);

        //should get new cookie with restart action
        response = await agent.get('/')
        .set('Cookie', restartCookie);
        expect(response.headers['set-cookie']).toEqual(newCookie);

    });
});