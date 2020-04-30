type Foo22 = {
    readonly bar: number;
    readonly bas: number;
}
// Initialization is okay
let foo22: Foo22 = { bar: 123, bas: 456 };
// Mutation is not
foo22.bar = 456; // Error: Left-hand side of assignment expression cannot be a constant or a read - only property

class Person {
    firstName: string = "John";
    lastName: string = "Doe";
    get fullName() {
        return this.firstName + this.lastName;
    }
}
const person = new Person();
console.log(person.fullName); // John Doe
person.fullName = "Dear Reader"; // Error! fullName is readonly

// const
// 1. is for a variable reference
// 2. the variable cannot be reassigned to anything else.
// readonly is
// 1. for a property
// 2. the property can be modified because of aliasing
const foo33 = 123; // variable reference
var bar: {
    readonly bar: number; // for property
}