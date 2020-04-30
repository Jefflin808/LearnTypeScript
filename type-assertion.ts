var foo = {};
foo.bar = 123;
foo.bas = "hello";

var foo1 = {};
foo1["bar"] = 123;
foo1["bas"] = 'Hello';

interface Foo {
    bar: number;
    bas: string;
}

var foo2 = {} as Foo; // type assertion as Foo
foo2.bar = 123;
foo2.bas = 'hello';

function logName(something: { name: string }) {
    console.log(something.name);
}

logName({ name: 'matt', job: 'being awasome' });//<-- so is not allowed

var person = { name: 'matt', job: 'being awasome' };//so is ok
logName(person);

// Assuming
interface State {
    foo?: string;//<--? optional
    bar?: string;
}

function setState(s:State){
    console.log(s.foo);
}
// You want to do:
setState({ foo: "Hello" }); // Yay works fine! 
// Because of freshness it's protected against typos as well!
setState({ foos: "Hello" }}; // Error: Objects may only specify known properties
// And still type checked
setState({ foo: 123 }}; // Error: Cannot assign number to a string

