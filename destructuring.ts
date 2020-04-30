let foo4 = {
    a: 123,
    b: 456
};
let { a } = foo4;
let { c } = foo4; //ERROR

const bar4 = [1, 2];
let [a1, b1] = bar4;