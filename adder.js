// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.


/**Input - array with a target valur
 * Output - boolean true or false
 * 
 * return true or false if there are a pair of numbers in the array that add up to the value of k.  if no values work return false.  access each number in the array, check whether each number plus each number in the collection adds to k, if true return true, 
 */


// const adder = (arr, k) => {
//   let len = arr.length; 
//   //iterate through the arr at index 0
//   for (let i = 0; i < len; i++) {
//   //nest an inner loop starting at index 1
//     let firstValue = arr[i];
//     for (let j = 0; j < len; j++) {
//   //check if the value in the outer loop plus the value in the inner loop adds to k
//     let secondValue = arr[j];
//     if (firstValue + secondValue === k && firstValue !== secondValue) {
//   //if true return true
//         return true; 
//       }
//     }
//   }
//   //return false
//   return false; 
// }


const adder = (arr, k) => {
  let numSet = new Set(arr);
  let len = arr.length; 
  for (let i = 0; i < len; i++) {
    if (numSet.has(k - arr[i])) {
      return true; 
    }
  }
  return false; 
}


console.log(adder([7, 15, 3, 10], 17)) // should return true since 10 + 7 is 17
console.log(adder([10, 15, 5, 7], 10)) // should return false
console.log(adder([10, 15, 3, 7, 5, 8], 8)) //should return true