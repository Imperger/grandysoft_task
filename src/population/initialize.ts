import { RandomUser } from './fake-users';
import { UserSchema } from '../user/user-schema';
import { FollowerSchema } from '../follower/follower-schema';
import { FollowerFactory } from './follower-factory/follower-factory';

export async function Initialize(totalUsers: number, followersFactory: FollowerFactory) {
    const presented = await UserSchema.count();

    if (presented < totalUsers) {
        await PopulateUsers(totalUsers - presented);
        await followersFactory.Populate();
    }
}

async function PopulateUsers(count: number) {
    while (count-- > 0) {
        await new UserSchema(RandomUser()).save();
    }
}
