//So ProTip: Always use === and !== except for null checks, which we cover later.
//Note that string == number and string === number are both compile time errors in
//TypeScript, so you don't normally need to worry about this.
/// Imagine you are doing `foo.bar == undefined` where bar can be one of:
console.log(undefined == undefined); // true
console.log(null == undefined); // true
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false
//Recommend == null to check for both undefined or null . You generally don't want to
//make a distinction between the two.