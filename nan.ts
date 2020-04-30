// Don't do this
console.log(NaN === NaN); // false!!
// Do this
console.log(Number.isNaN(NaN)); // true
