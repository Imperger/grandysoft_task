import sequelize from "sequelize";
import { UserSchema } from "./user-schema";
import { FollowerSchema } from "../follower/follower-schema";
import { PublicUser, ToPublicUser } from './user-transform';
import { NotFoundException } from "../common/http-exception";

interface UserWithFriends extends PublicUser {
    friends: PublicUser[];
}

export const FriendsOrderByVariants = ['id', 'firstname', 'gender'] as const;
export type FriendsOrderBy = typeof FriendsOrderByVariants[number];

export const FriendsOrderTypeVariants = ['desc', 'asc'] as const;
export type FriendsOrderType = typeof FriendsOrderTypeVariants[number];

export interface FriendsOrder {
    order: FriendsOrderType;
    by: FriendsOrderBy;
}

class UserService {
    async All() {
        return (await UserSchema.findAll({
            include: [
                {
                    model: FollowerSchema,
                    include: [
                        {
                            model: UserSchema,
                            as: 'following',
                            required: true
                        }
                    ]
                }
            ],
            order: [['id', 'asc']]
        }))
            .map(u => ({
                ...ToPublicUser(u),
                following: u.following?.map(f => ToPublicUser(f.following)) ?? []
            }));
    }

    async One(id: number, order: FriendsOrder): Promise<UserWithFriends> {
        const friends = await FollowerSchema.findAll({
            where: { followerId: id },
            attributes: [],
            order: [['following', order.by, order.order]],
            include: [
                {
                    model: FollowerSchema,
                    attributes: [],
                    where: sequelize.where(sequelize.col('follow.followingId'), '=', sequelize.col('FollowerSchema.followerId')),
                    required: true
                },
                {
                    model: UserSchema,
                    as: 'follower',
                    required: true
                },
                {
                    model: UserSchema,
                    as: 'following',
                    required: true
                }
            ]
        });

        if (friends.length === 0) {
            const user = await UserSchema.findByPk(id);

            if (user) {
                return { ...ToPublicUser(user), friends: [] };
            } else {
                throw new NotFoundException();
            }
        }

        return {
            ...ToPublicUser(friends[0].follower),
            friends: friends.map(x => ToPublicUser(x.following))
        };
    }

    async MaxFollowing(limit: number) {
        return (await FollowerSchema.findAll({
            attributes: [[sequelize.fn('COUNT', sequelize.col('FollowerSchema.followerId')), 'followers',]],
            include: [
                {
                    model: UserSchema,
                    as: 'follower',
                    required: true
                }
            ],
            group: ['follower.id'],
            order: [['followers', 'desc']],
            limit
        })).map(u => ({
            ...ToPublicUser(u.follower),
            follows: Number.parseInt(u.getDataValue<any>('followers'))
        }));
    }

    async NotFollowing() {
        return await UserSchema.findAll({
            where: sequelize.where(sequelize.col('following.followerId'), '=', null),
            include: [
                {
                    attributes: [],
                    model: FollowerSchema,
                    required: false
                }
            ]
        });
    }
}

export const userService = new UserService();
