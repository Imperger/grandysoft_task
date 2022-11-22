import express from 'express';
import { Db } from './db/connection'
import { ExceptionMiddleware } from './exception-middleware';
import { FollowerFactory } from './population/follower-factory/follower-factory';
import { PredefinedFollowersFactory } from './population/follower-factory/predefined-followers-factory';
import { RandomFollowersFactory } from './population/follower-factory/random-followers-factory';
import { Initialize as PopulateDb } from './population/initialize';
import { UserRouter } from './user/user-router';

const PrepopulatedUsers = 200;
const FollowingLinksLimit = 150;

function FollowerFactory(): FollowerFactory {
    return process.env.FOLLOWERS_FACTORY === 'random' ?
        new RandomFollowersFactory(FollowingLinksLimit) :
        new PredefinedFollowersFactory();
}

async function Main(): Promise<void> {
    await Db.sync({ force: true });
    await PopulateDb(PrepopulatedUsers, FollowerFactory());

    const app = express();

    app.use(UserRouter());

    app.use(ExceptionMiddleware);

    app.listen(3000);
}

Main();
