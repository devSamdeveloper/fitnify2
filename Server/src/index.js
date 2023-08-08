import dotenv from 'dotenv';
dotenv.config();

import app from './app.js';
import { getConfig } from './config.js';
import { connectDb } from './db.js';

const config = getConfig();

async function initApp (appConfig, dbConfig) {
    try {
        await connectDb(dbConfig)
        app.listen(config.appConfig.port, ()=> console.log(`listening on port ${config.appConfig.port}`));
    } catch (e) {
        console.error(e)
        process.exit(0)
    }
}

initApp(config.appConfig, config.dbConfig)