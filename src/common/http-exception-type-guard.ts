import { HttpException } from "./http-exception";

export function IsHttpException(ex: unknown): ex is HttpException {
    return ex instanceof HttpException;
}
