

// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.

/**Input - string
 * Output - single letter/ string
 * 
 * find the missing letter within the range of letters passed as a string.  return the missing letter, if there is no letter missing, return undefined. 
 * 
 * create a string as a base case with all letters in the alphabet.  
 * compare each letter from the input string with a corresponding chunk within the input range
 * check for a missing letter
 * return the element at the missing index 
 */




function fearNotLetter(str) {
  //create a string with the alphabet
  let range = str;
  let abc = 'abcdefghijklmnopqrstuvwxyz';
  let len = str.length + 1; 
  //create a tempArray from a slice of the alphabet from the range of the input str
  let tempString = abc.slice(abc.indexOf(range[0]), len);
  let tempArray = tempString.split('');
  //create an array from the input string split into letters
  let inputLetters = range.split('');
  //filter the tempArray and return the letter thats index is = -1 in the input str
  let result = tempArray.filter(letter => {
    return inputLetters.indexOf(letter) === -1;
  });
  return result + ''; 
}

// console.log(fearNotLetter("abce")) //should return "d".

// console.log(fearNotLetter("abcdefghjklmno")) //should return "i".

console.log(fearNotLetter("stvwx")) //should return "u".

// console.log(fearNotLetter("bcdf")) //should return "e".

// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")) //should return undefined.