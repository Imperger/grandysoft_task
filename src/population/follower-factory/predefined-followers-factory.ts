import { FollowerFactory } from "./follower-factory";
import { FollowerSchema } from "../../follower/follower-schema";

export class PredefinedFollowersFactory implements FollowerFactory {
    async Populate(): Promise<void> {
        await new FollowerSchema({ followerId: 1, followingId: 2 }).save();
        await new FollowerSchema({ followerId: 1, followingId: 5 }).save();
        await new FollowerSchema({ followerId: 1, followingId: 3 }).save();
        await new FollowerSchema({ followerId: 3, followingId: 1 }).save();
        await new FollowerSchema({ followerId: 1, followingId: 4 }).save();
        await new FollowerSchema({ followerId: 4, followingId: 1 }).save();
    }
}
