import { IsVariant } from '../common/variant-type-guard';
import { BadRequestException } from '../common/http-exception';
import { FriendsOrder, FriendsOrderByVariants, FriendsOrderTypeVariants } from './user-service';

export function OrderValidator<T>(type: T, by: T): FriendsOrder {
    const ret: FriendsOrder = { by: 'firstname', order: 'asc' };

    if (!(IsStringOrNotSet(type) && IsStringOrNotSet(by))) {
        throw new BadRequestException();
    }

    if (type) {
        if (IsVariant(type, FriendsOrderTypeVariants)) {
            ret.order = type;
        } else {
            throw new BadRequestException();
        }
    }

    if (by) {
        if (IsVariant(by, FriendsOrderByVariants)) {
            ret.by = by;
        } else {
            throw new BadRequestException();
        }
    }

    return ret;
}


function IsStringOrNotSet(x: unknown): x is string | undefined {
    return typeof x === 'string' || x === undefined;
}
