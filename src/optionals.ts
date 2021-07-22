/**
 * You can choose to set the values or not
 * In JavaScript, if you access a property that doesn’t exist, you’ll get the value undefined rather than a runtime error
 * Explicit check for undefined necessary in TypeScript
 */

function printIngredient(quantity: string, ingredient: string, extra?: string) {
    console.log(`${quantity} ${ingredient} ${extra ? ` ${extra}` : ""}`); 
}

printIngredient("1C", "Flour");
printIngredient("1C", "Sugar", "something more");

interface User {
    id: string;
    info?: {
        email?: string;
    };
}


function getEmailEasy(user: User): string {
    return user?.info?.email ?? "";
}

function addWithCallback(x: number, y: number, callback?: () => void) {
    console.log([x, y]);
    callback?.();
}
