import { Table, Column, Model, HasMany, Index, BelongsToMany } from 'sequelize-typescript';
import { FollowerSchema } from '../follower/follower-schema';

export interface UserCreateAttrs {
    firstname: string;
    gender: boolean;
}

export interface UserAttrs extends UserCreateAttrs {
    id: number;
}

@Table({ timestamps: false })
export class UserSchema extends Model<UserAttrs, UserCreateAttrs> {
    declare id: number;

    @Index
    @Column
    declare firstname: string;

    @Index
    @Column
    declare gender: boolean;

    @BelongsToMany(() => UserSchema, () => FollowerSchema, 'followerId', 'followingId')
    declare followers: UserAttrs[];

    @HasMany(() => FollowerSchema, 'followerId')
    declare following: FollowerSchema[];
}
