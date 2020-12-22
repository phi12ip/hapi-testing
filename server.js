import Hapi from '@hapi/hapi';

const port = 4000;
const host = 'localhost';

const server = Hapi.server({ port, host });

server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const {received, remoteAddress } = request.info;
        return {
            statusCode: 200,
            error: undefined,
            message: `Server up. Recieved request from ip: ${remoteAddress} at ${received}`
        };
    }
});

export async function init() {
    await server.initialize();
    console.log(`Server initialized, but not listening yet.`)
    return server;
};

export async function start() {
    await server.start();
    console.log(`Server running and listening on port ${port}`)
    return server;
};