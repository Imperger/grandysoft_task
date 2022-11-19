import { IsHttpException } from "./common/http-exception-type-guard";

export function ExceptionMiddleware(err: Error, req: any, res: any, next: any) {
    let status = 500;
    if (IsHttpException(err)) {
        status = err.status;
    }

    res.status(status).end();
}
