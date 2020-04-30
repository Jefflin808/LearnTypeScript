try {
    throw new Error('Something bad happened');
}
catch (e) {
    console.log(e);
}

let foo: number; // Notice use of `let` and explicit type annotation
try {
foo = runTask1();
}
catch(e) {
console.log('Error:', e);
}
try {
const bar = runTask2(foo);
}
catch(e) {
console.log('Error:', e);
}