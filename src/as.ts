// as
interface Person {
    first: string;
    last: string;
};

const user1 = {} as Person;

const reallyConst = [1, 2, 3] as const;
// reallyConst[0] = 50;


// unknown vs any
let vAny: any = 10;
let vUnknown: unknown = 10;


let s1: string = vAny;
// let s2: string = vUnknown;