import { Router } from 'express';
import { AsyncRoute } from '../common/async-route';
import { NumberValidator } from '../common/number-validator';
import { OrderValidator } from './order-validator';
import { userService } from './user-service';

export const UserRouter = () => Router()
    .get('/users', AsyncRoute(async (req, res) => {
        res.send(await userService.All())
    }))
    .get('/users/:id/friends', AsyncRoute(async (req, res) => {
        const id = NumberValidator(req.params.id);
        const order = OrderValidator(req.query.order_type, req.query.order_by);
        const info = await userService.One(id, order);

        res.send(info);
    }))
    .get('/max-following', AsyncRoute(async (req, res) => {
        res.send(await userService.MaxFollowing(5));
    }))
    .get('/not-following', AsyncRoute(async (req, res) => {
        res.send(await userService.NotFollowing());
    }));
