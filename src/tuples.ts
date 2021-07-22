/**
 * It represents a heterogeneous collection of values.
 * Enable storing multiple fields of different types.
 */

function simpleFunction(
    initial: string
): [() => string, (v: string) => void] {
    let str: string = initial;
    return [
        () => str,
        (v: string) => {
            str = v;
        },
    ];
}

const [str1getter, str1setter] = simpleFunction("hello");
const [str2getter, str2setter] = simpleFunction("jack");
