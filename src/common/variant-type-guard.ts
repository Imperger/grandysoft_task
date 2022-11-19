export function IsVariant<E extends readonly any[]>(x: any, e: E): x is E[keyof E] {
    return e.includes(x);
}
