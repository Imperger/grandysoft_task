import { Sequelize } from 'sequelize-typescript';
import { FollowerSchema } from '../follower/follower-schema';
import { UserSchema } from '../user/user-schema';

export const Db = new Sequelize({
  host: 'db',
  database: 'postgres',
  dialect: 'postgres',
  username: 'postgres',
  password: 'postgres',
  models: [UserSchema, FollowerSchema]
});
