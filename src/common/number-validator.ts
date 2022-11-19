import { BadRequestException } from "./http-exception";

export function NumberValidator(x: string): number {
    const num = Number.parseInt(x);

    if (Number.isNaN(num)) {
        throw new BadRequestException();
    }

    return num;
}
