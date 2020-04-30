function doSomething(x: number | string) {
    if (typeof x === 'string') { // Within the block TypeScript knows that `x` must be a string
        console.log(x.subtr(1)); // Error, 'subtr' does not exist on `string`
        console.log(x.substr(1)); // OK
    }
    x.substr(1); // Error: There is no guarantee that `x` is a `string`
}

class Foo12 {
    foo = 123;
    common = '123';
}
class Bar {
    bar = 123;
    common = '123';
}
function doStuff(arg: Foo12 | Bar) {
    if (arg instanceof Foo12) {
        console.log(arg.foo); // OK
        console.log(arg.bar); // Error!
    }
    if (arg instanceof Bar) {
        console.log(arg.foo); // Error!
        console.log(arg.bar); // OK
    }
    console.log(arg.common); // OK
    console.log(arg.foo); // Error!
    console.log(arg.bar); // Error!
}
doStuff(new Foo12());
doStuff(new Bar());

class Foo {
    foo = 123;
}
class Bar1 {
    bar = 123;
}
function doStuff(arg: Foo | Bar1) {
    if (arg instanceof Foo) {
        console.log(arg.foo); // OK
        console.log(arg.bar); // Error!
    }
    else { // MUST BE Bar1!
        console.log(arg.foo); // Error!
        console.log(arg.bar); // OK
    }
}
doStuff(new Foo());
doStuff(new Bar1());

//The in operator does a safe check for the existance of a proerty on an object and can be used as a type guard.
interface A {
    x: number;
}
interface B {
    y: string;
}
function doStuff2(q: A | B) {
    if ('x' in q) {
        // q: A
    }
    else {
        // q: B
    }
}

