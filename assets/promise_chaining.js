let number = 20;
const incrNumber = new Promise((resolve, reject) => {
    resolve({ incr: ++number });
    reject("Number not Increment");
});

incrNumber
    .then((res) => {
        console.log("1 incr", res);
        return incrNumber;
    })
    .then((res1) => {
        console.log("2 incr", res1);
        return incrNumber;
    })
    .catch(() => {
        console.log(err);
    });

const getData = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/1");
};
getData()
    .then((data) => data.json())
    .then((data1) => console.log(data1)) // output: {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
    .catch((err) => console.log(err));
