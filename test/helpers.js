import { init } from '../server.js';

export class APIRequest {
    static async get(url) {
        const server = await init();
        const res = await server.inject({
            method: 'get',
            url: '/'
        });
        await server.stop();
        return res;
    }
}