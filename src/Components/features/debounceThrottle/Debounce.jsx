import { debounce } from "lodash";

// debounce( func, wait, options )

// func the function that needs to be debounced
// wait is number of milliseconds taken to delay the fucntion
// options are used to change behavious of the fucntion

// Using debounce() method with its parameters
// Create a debounced function that delays invoking the function by 5000 milliseconds
const debounce_fun = debounce(function () {
  console.log("Function debounced after 5000ms!");
}, 5000);

// Invoke the debounced function
debounce_fun();
