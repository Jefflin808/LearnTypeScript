var foo = 123; 
if(true){
    var foo = 456;
}
console.log(foo); // 456

let foo = 123; 
if(true){
    let foo = 456;
}
console.log(foo); // 123

var index = 0; 
var array = [1,2,3];
for(let index=0; index<array.length; index++){
    console.log(array[index]);
}
console.log(index); // 0

//functions create a new scope
var foo = 123; 
function test(){
    var foo = 456;
}
test();
console.log(foo); //123

const foo = 123; 
if(true){
    const foo = 456; // allowed as its a new variable limited to this 'if' block
}

//deep immmutability
const foo = {bar: 123}; 
foo = {bar: 456}; //ERROR: left hand side of an assignment expression cannot be a constant

const foo = {bar: 123}; 
foo.bar = 456; // allowed, recommend using const with primitives or immutable data structures



