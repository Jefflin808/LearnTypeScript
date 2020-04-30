import * as $ from "jquery";

foo = 123; // Error: `foo` is not defined

declare var foo : any;
foo = 123; // allowed

// any -> object, boolean, string, number
// object -> Date

var myDate: Date = new Date(); //a Date is a complex type
var myString: string = "this is a string"; //string is a simple type
var myNumber: number = 10; //number is a simple type
var myBoolean: boolean = true; //boolean is a simple type
/* Correct all types descend from any */
var x: any = myDate;
x = myString;
x = myNumber;
x = myBoolean;
/* Correct all comlex types descend from object */
var myObject: object = myDate;
/* Wrong! Simple types do not descend from object */
myObject = myString;
myObject = myNumber;
myObject = myBoolean;

var myNumber: number = 10; //number is a 64 bit floating point simple type

/* correct null type may assume just the null value */
var myNull: null = null;
/* correct undefined type may assume just the undefined value */
var myUndefined: undefined = undefined;
/* Wrong! */
myNull = 10;
myUndefined = 10;

// "strictNullChecks": true,
/* Wrong! */
var nullCheck: string = null;
var undefinedCheck: string = undefined;

