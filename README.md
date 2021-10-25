## Javascript-promise

-   ## Promise
    An object that is used as a placeholder for the future result of async operation.
    or May be a container for a future value.
    "Producing code" is code that can take some time
    "Consuming code" is code that must wait for the result
    A Promise is a JavaScript object that links producing code and consuming code
-   ## Advantage of promise
    We no longer need to rely on event and callbacks passed into async function to handle async result.
    Instead of nesting callback, we can chain promise for a async operation: escaping Callback hell
-   ## A Promise is in one of these states or life cycle of promise:

    1. pending: initial state, neither fulfilled nor rejected.
       While a Promise object is "pending" (working), the result is undefined.
    2. fulfilled: meaning that the operation was completed successfully.
       When a Promise object is "fulfilled", the result is a value.
    3. rejected: meaning that the operation failed.
       When a Promise object is "rejected", the result is an error object.

-   You cannot access the Promise properties state and result.
-   You must use a Promise method to handle promises.
-   Promise.then() takes two arguments,
    1.a callback for success and 2. another for failure

## Promise any (Promise.any())

    This method is useful for returning the first promise that fulfills.
    It short-circuits after a promise fulfills, so it does not wait for the other promises to complete once it finds one.
    It returns a single promise that resolves as soon as any of the promises in the iterable fulfills, with the value of the fulfilled promise.

## Promise race (Promise.race())

    The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects,
    with the value or reason from that promise.

## Diff Promise.race() and Promise.any()

    Promise.race() is settled as soon as any of the promises you feed it settle, whether they are fulfilled or rejected.
    Promise.any() is settled as soon as any of the promises you feed it is fulfilled or they are all rejected, in which case it's rejected with an AggregateError .

## Promise all settled (Promise.allSettled())

    Method returns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

## other information

-   json() (abc.json()) function is a async function.

-
