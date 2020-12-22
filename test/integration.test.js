import { APIRequest } from './helpers.js';

describe('API', function () {
    it('should display a 200 for the root of the api', async function () {
        const res = await APIRequest.get('/');
        console.log(res);
        throw new Error('Not implemented.')
    })
})