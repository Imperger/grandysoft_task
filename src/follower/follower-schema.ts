import { Table, Column, Model, ForeignKey, HasOne, BelongsTo, Index, HasMany } from 'sequelize-typescript';
import { UserSchema } from '../user/user-schema';

export interface Follower {
    followerId: number;
    followingId: number;
}

@Table({ timestamps: false })
export class FollowerSchema extends Model<Follower> {
    @ForeignKey(() => UserSchema)
    @Index
    @Column
    declare followerId: number;

    @ForeignKey(() => UserSchema)
    @Index
    @Column
    declare followingId: number;

    @BelongsTo(() => UserSchema, { as: 'follower' })
    declare follower: UserSchema;

    @BelongsTo(() => UserSchema, { as: 'following' })
    declare following: UserSchema;

    @BelongsTo(() => FollowerSchema, 'followingId')
    declare follow: FollowerSchema;
}
