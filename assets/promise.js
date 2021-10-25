const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Function Have successfully return");
        resolve("Function Have successfully return resolve");
        reject("Connection Failed reject");
    }, 1000);
    console.log("Function Have failed return");
    // reject("Connection Failed");
});

myFirstPromise.then(
    (data) => console.log(data),
    (err) => console.log(err)
);
/**
 * *** Output
 * Function Have failed return
 * promise.js:3 Function Have successfully return
 * promise.js:12 Function Have successfully return resolve
 */

const getCountryData = (country) => {
    //Fetch is return promise
    let data = fetch(`https://restcountries.eu/rest/v2/name/${country}`).then(
        (res) => console.log(res),
        (err) => console.log(err)
    );
};
// getCountryData("India");

// fetch("http://example.com/movies.json")
//     .then((response) => response.json())
//     .then((data) => console.log(data));

const getData = () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/1");
};

getData()
    .then(
        (data) => {
            return data.json();
        },
        (err) => console.log(err)
    )
    .then((data1) => {
        console.log(data1);
    });
getData()
    .then((data) => data.json())
    .then((data1) => console.log(data1))
    .catch((err) => console.log(err));
// .err((err) => console.log(err));
