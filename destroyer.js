


// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note
// You have to use the arguments object.


/**Input
 * Output
 * 
 * create an array from the second argument to the last in order to access all arguments.  map thruogh the first argument iterate through the first argument array, check if the current element in the args array is equal to each of the elements in the input array, if they are filter them out, return the new array
 */




function destroyer(arr) {
    let args = [...arguments];
    console.log(args);
  
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);