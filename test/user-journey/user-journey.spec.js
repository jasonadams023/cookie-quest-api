const request = require('supertest');
const app = require('../../app/app');

const newCookie = [ 'cookie-quest=new cookie!' ];
const updatedCookie = [ 'cookie-quest=updated cookie!'  ];

describe('User Journey', () => {
    it('should go through the happy path', async () => {
        const agent = request(app);

        //request without cookie, gets back a new cookie
        let response = await agent.get('/');
        expect(response.headers['set-cookie']).toEqual(newCookie);

        //request with a cookie, gets back an updated cookie
        response = await agent.get('/')
        .set('Cookie', newCookie);
        expect(response.headers['set-cookie']).toEqual(updatedCookie);
    });
});