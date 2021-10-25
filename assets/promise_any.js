let promise_1 = fetch("https://jsonplaceholder.typicode.com/posts");
let promise_2 = fetch("https://jsonplaceholder.typicode.com/comments");
let promise_3 = fetch("https://jsonplaceholder.typicode.com/albums");
let promise_4 = fetch("https://jsonplaceholder.typicode.com/photos");
let promise_5 = fetch("https://jsonplaceholder.typicode.com/todos");
let promises = [promise_1, promise_2, promise_3, promise_4, promise_5];

Promise.any(promises)
    .then((data) => data.json())
    .then((data1) => console.log(data1));

console.log("promise.any with reject");
let newPromise_1 = new Promise((resolve, reject) => {
    reject("newPromise_1");
});
let newPromise_2 = new Promise((resolve, reject) => {
    resolve({ data: "newPromise_2" });
});
let newPromise_3 = new Promise((resolve, reject) => {
    reject("newPromise_3");
});
let newPromise_4 = new Promise((resolve, reject) => {
    reject("newPromise_4");
});
let newPromise_5 = new Promise((resolve, reject) => {
    reject("newPromise_5");
});
let newPromises = [
    newPromise_1,
    newPromise_2,
    newPromise_3,
    newPromise_4,
    newPromise_5,
];
// Promise.any(promises)
//     .then((data) => data.json())
//     .then((data1) => console.log(data1))
//     .catch((err) => console.log(err));

const pErr = new Promise((resolve, reject) => {
    reject("Always fails");
});
const pErr1 = new Promise((resolve, reject) => {
    reject("Always fails");
});
Promise.any([pErr, pErr1]).catch((err) => {
    console.log(err);
});

// console.log("promise.any with reject");
// let newPromise_1 = new Promise((resolve, reject) => {
//     reject("newPromise_1");
// });
// let newPromise_2 = new Promise((resolve, reject) => {
//     reject("newPromise_2");
// });
// let newPromise_3 = new Promise((resolve, reject) => {
//     reject("newPromise_3");
// });
// let newPromise_4 = new Promise((resolve, reject) => {
//     reject("newPromise_4");
// });
// let newPromise_5 = new Promise((resolve, reject) => {
//     reject("newPromise_5");
// });
// let newPromises = [
//     newPromise_1,
//     newPromise_2,
//     newPromise_3,
//     newPromise_4,
//     newPromise_5,
// ];
// Promise.any(promises)
//     .then((data) => data.json())
//     .then((data1) => console.log(data1))
//     .catch((err) => console.log(err));
