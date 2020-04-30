function Person(age) {
    this.age = age;
    this.growOld = function () {
        this.age++;
    }
}
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000); // 1, should have been 2

function Person(age) {
    this.age = age;
    this.growOld = () => {
        this.age++;
    }
}
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000); // 2

//The reason why this works is the reference to this is captured by the arrow function from
//outside the function body. This is equivalent to the following JavaScript code
function Person(age) {
    this.age = age;
    var _this = this; // capture this
    this.growOld = function () {
        _this.age++; // use the captured this
    }
}
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000); // 2


//Note that since you are using TypeScript you can be even sweeter in syntax and combine
//arrows with classes:
class Person {
    constructor(public age: number) { }
    growOld = () => {
        this.age++;
    }
}
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000); // 2

class Adder {
    constructor(public a: number) { }
    // This function is now safe to pass around
    add = (b: number): number => {
        return this.a + b;
    }
}
class ExtendedAdder extends Adder {
    // Create a copy of parent before creating our own
    private superAdd = this.add;
    // Now create our override
    add = (b: number): number => {
        return this.superAdd(b);
    }
}

// WRONG WAY TO DO IT
var foo = () => {
    bar: 123
};

// Correct
var foo = () => ({
    bar: 123
});
