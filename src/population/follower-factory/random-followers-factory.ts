import { FollowerFactory } from "./follower-factory";
import { RandomInt } from "../../common/random-int";
import { FollowerSchema } from "../../follower/follower-schema";
import { UserSchema } from "../../user/user-schema";

export class RandomFollowersFactory implements FollowerFactory {
    constructor(private readonly maxLinks: number) { }

    async Populate(): Promise<void> {
        const userIds = (await UserSchema.findAll({ attributes: ['id'] })).map(u => u.id);
        const rnd = RandomInt(0, userIds.length);

        for (const followerId of userIds) {
            for (let followingIdx = rnd(), links = 0;
                followingIdx < userIds.length && links < this.maxLinks;
                followingIdx += rnd() + 1) {
                if (followerId !== userIds[followingIdx]) {
                    await new FollowerSchema({ followerId, followingId: userIds[followingIdx] }).save();

                    ++links;
                }
            }
        }
    }
}
