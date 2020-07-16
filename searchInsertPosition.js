// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2

// Example 2:

// Input: [1,3,5,6], 2
// Output: 1

// Example 3:

// Input: [1,3,5,6], 7
// Output: 4

// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

/**
 * Input - an array and an integer, 
 * Output - an integer representing true or possible index
 * Constraints - assume input array is sorted, 
 * EdgeCases - empty array, array not integers, target is not a number
 */


const searchInsert = (array, target) => {
  //check edge cases
  //return indexOf target if it exists
  //create a tempArray to insert target
  let tempArray = array;
  //otherwise, iterate through the input array
  array.forEach(number => {
    //check if the current element is greater than the target
    if (number > target) {
      //if true, splice the target into the tempArray at the current iteration index
      tempArray.splice(array.indexOf(number),0,target);
      //return the index of the target in the tempArray
      return tempArray.indexOf(target);
    } else if (number < target) {
      tempArray.push(target);
      return tempArray.indexOf(target);
    } else {
      tempArray.shift(target)
      return tempArray.indexOf(target);
    }
  });
  return array.indexOf(target);
};

// console.log(searchInsert([1,2,3,4,5], 3)) // expected output: 2
console.log(searchInsert([2,3,4,5], 1)) // expected output: 0
console.log(searchInsert([1,3,4,5], 2)) // expected output: 1
console.log(searchInsert([2,3,4,5], 6)) // expected output: 4





