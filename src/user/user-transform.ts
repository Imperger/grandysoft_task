import { UserAttrs } from "./user-schema";

export interface PublicUser {
    id: number;
    firstname: string;
    gender: string;
}

export function ToPublicUser(user: UserAttrs): PublicUser {
    return {
        id: user.id,
        firstname: user.firstname,
        gender: user.gender ? 'male' : 'female',
    };
}
