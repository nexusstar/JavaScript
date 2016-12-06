# Promises explained

A promise in plain text:

"Imagine you want a candy and someone promise to buy you one."

You don't know if you will get that candy.

That is a _promise_. Promise has 3 states. They are:

1. _pending_ You don't know if you will get the candy.
1. _resolved_ You get the candy.
1. _rejected_ You don't get the candy.

## Creating a promise

```javascript
      var isCandy = false;

      var willGetCandy = new Promise(
         function (resolve, reject) {
            if(isCandy) {
               var candy = {
                  brand: "Mars",
                  size: "xl"
               };
               resolve(candy); //fullfilled
            } else {
               var reason = new Error("you are on a sugar diet");
               reject(reason); //reject
            }
         }
      );
```

There is a standard syntax to define `Promise` on
[ MDN documentation ](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise).


