let x: "hello" = "hello";
x = "hello";
// x = "howdy";

function printText(s: string, alignment: "left" | "right") {
    // ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "center");


function sendEvent(name: "addToCart", data: { addToCart: number }): void;
function sendEvent(name: "checkout", data: { cartCount: number }): void;
function sendEvent(name: string, data: unknown): void {
    console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent("checkout", { cartCount: 123123 });