const request = require('supertest');
const app = require('../../app/app');

const newCookie = [ 'cookie-quest={"data":"new cookie!"}' ];
const cookieToUpdate = [ 'cookie-quest={"data":"new cookie!", "action":"action!"}' ];
const updatedCookie = [ 'cookie-quest={"data":"updated cookie!"}' ];

describe('App', () => {
    const agent= request(app);

    it('should return a new cookie if not given one', async () => {
        const response = await agent.get('/');
        expect(response.headers['set-cookie']).toEqual(newCookie);
    });

    it('should return the same cookie if nothing to change', async () => {
        const response = await agent.get('/')
        .set('Cookie', newCookie);
        expect(response.headers['set-cookie']).toEqual(newCookie);
    });

    it('should return updated cookie if supplied with cookie to change', async () => {
        const response = await agent.get('/')
        .set('Cookie', cookieToUpdate);
        expect(response.headers['set-cookie']).toEqual(updatedCookie);
    });
});