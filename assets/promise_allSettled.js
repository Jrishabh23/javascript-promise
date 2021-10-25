const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
    setTimeout(reject, 100, "foo")
);
const promise3 = Promise.reject("reject");
const promises = [promise1, promise2, promise3];
Promise.allSettled(promises).then((results) =>
    console.log("Using Promise.allSettled", results)
);

Promise.any(promises)
    .then((results) => console.log("Using Promise.any", results))
    .catch((err) => console.log(err));

Promise.race(promises).then((results) =>
    console.log("Using Promise.race", results)
);
