import { RandomUser } from './fake-users';
import { UserSchema } from '../user/user-schema';
import { FollowerSchema } from '../follower/follower-schema';

export async function Initialize(totalUsers: number) {
    const presented = await UserSchema.count();

    if (presented < totalUsers) {
        await PopulateUsers(totalUsers - presented);
        await PopulateFolows();
    }
}

async function PopulateUsers(count: number) {
    while (count-- > 0) {
        await new UserSchema(RandomUser()).save();
    }
}

async function PopulateFolows() {
    await new FollowerSchema({ followerId: 1, followingId: 2}).save();
    await new FollowerSchema({ followerId: 1, followingId: 5}).save();
    await new FollowerSchema({ followerId: 1, followingId: 3}).save();
    await new FollowerSchema({ followerId: 3, followingId: 1}).save();
    await new FollowerSchema({ followerId: 1, followingId: 4}).save();
    await new FollowerSchema({ followerId: 4, followingId: 1}).save();
}
