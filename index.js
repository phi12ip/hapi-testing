import { init, start } from './server.js';

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

await init();
await start();