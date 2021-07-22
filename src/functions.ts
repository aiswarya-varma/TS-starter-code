function addNumbers(a:number, b:number) {
    return a + b;
}

console.log(addNumbers(1, 2));
// console.log(addNumbers(1, "a"));

const addStrings = (str1: string, str2: string = ""): string =>
    `${str1} ${str2}`;

// Overloading
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

console.log(len("")); 
console.log(len([0]));
// console.log(len(5));


// Union : Formed from two or more other types, representing values that may be any one of those types.
const welcomePeople = (x: string[] | string) => {
    if (Array.isArray(x)) {
        // 'string[]'
        console.log("Hello, " + x.join(" and "));
    } else {
        //string
        console.log("Welcome " + x);
    }
}

welcomePeople(["a", "b"]);
welcomePeople("s");
