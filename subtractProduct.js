// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

 

// Example 1:

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

// Example 2:

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21

/**
 * Input - number
 * Output - number
 * constraints - 
 * EdgeCases - input is not a number, input is only 1 digit, 
 */
const subtractProduct = (num) => {

  let stringNum = num.toString();

  if (typeof num !== 'number') {
    return `${num} is not a valid input`
  }

  if (stringNum.length < 2) {
    return `${num} is not a valid input`
  }

  //split the stringNum into individual elements
  digitArray = stringNum.split('');
  //create two helper functions, one to sum an array and another to multiply the elements in an array
  //set the product var to the result of calling the product helper function
  let product = productArray(stringNum);
  //set the sum var to the result of calling the sum helper function
  let sum = sumArray(stringNum);
  //set the result var to difference of the product - the sum
  let result = product - sum; 
  return result; 
};

const sumArray = (arr) => {
  let result = 0; 
  for (let i = 0; i < arr.length; i++) {
    currentNum = arr[i];
    let digits = Number.parseInt(currentNum);
    result += digits; 
    
  }
  return result; 
};

const productArray = (arr) => {
  let result = 1; 
  for (let i = 0; i < arr.length; i++) {
    currentNum = arr[i];
    Number.parseInt(currentNum);
    result *= currentNum;
  }
  return result; 
}


let nums = 24
// console.log(sumArray(['2','4']));
console.log(subtractProduct(nums));
