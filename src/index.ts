import express from 'express';
import { Db } from './db/connection'
import { ExceptionMiddleware } from './exception-middleware';
import { Initialize as PopulateDb } from './population/initialize';
import { UserRouter } from './user/user-router';

const PrepopulatedUsers = 200;

async function Main(): Promise<void> {
    await Db.sync({ force: false });
    await PopulateDb(PrepopulatedUsers);

    const app = express();

    app.use(UserRouter());

    app.use(ExceptionMiddleware);

    app.listen(3000);
}

Main();
