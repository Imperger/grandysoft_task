export class HttpException extends Error {
    constructor(public readonly status: number, message?: string) { super(message); }
}

export class BadRequestException extends HttpException {
    constructor() { super(400); }
}

export class NotFoundException extends HttpException {
    constructor() { super(404); }
}
