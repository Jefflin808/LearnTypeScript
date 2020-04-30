const promise = new Promise((resolve, reject) => {
    resolve(123);
});

promise.then((res) => {
    console.log('I get called: ', res === 123); // I get called: true
});

promise.catch((err) => {
    //This is never called
})

const promise = new Promise((resolve, reject) => {
    reject(new Error("Something awful happened"));
});
promise.then((res) => {
    // This is never called
});
promise.catch((err) => {
    console.log('I get called:', err.message); // I get called: 'Something awful happened'
});

const promise = new Promise((resolve, reject) => {
    reject("no value");
});
promise.then((res) => {
    // This is never called
}, err => {
    console.log("error handler is called " + err);
});
promise.catch((err) => {
    console.log('I get called:', err); // I get called: 'Something awful happened'
});
//error handler is called no value
//I get called: no value

// Create a rejected promise
Promise.reject(new Error('something bad happened'))
    .then((res) => {
        console.log(res); // not called
        return 456;
    })
    .then((res) => {
        console.log(res); // not called
        return 123;
    })
    .then((res) => {
        console.log(res); // not called
        return 123;
    })
    .catch((err) => {
        console.log(err.message); // something bad happened
    });

// Create a rejected promise
Promise.reject(new Error('something bad happened'))
    .then((res) => {
        console.log(res); // not called
        return 456;
    })
    .catch((err) => {
        console.log(err.message); // something bad happened
        return 123;
    })
    .then((res) => {
        console.log(res); // 123
    })