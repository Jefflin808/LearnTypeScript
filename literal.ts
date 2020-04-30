let foo: 'Hello';
foo = 'Bar'; //Error: "Bar" is not assignable to type 'Hello'

type OneToFive = 1 | 2 | 3 | 4 | 5; 
type Bools = true | false;

function iTakeFoo(foo: 'foo'){}
const test = {
    someProp : 'foo' // fix is as 'foo'
}
iTakeFoo(test.someProp);//error: Argument of type string is not assigment to parameter of type 'foo'


