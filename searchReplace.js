

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note
// Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"






/**Input - string
 * Ouput - string modified
 * Constraints  - maintain casing of modified string
 * Edge cases - 
 * 
 * access the input string, seach the string for the before word.  Cut the before word out of the string.  replace the before word with the after word.create the modified string and return it.
 * 
 * create an array from the input string
 * filter the array to return all words not eqaul to before word
 * store the index of the word being removed
 * insert the after word into the array at the index of the before word
 * join the array into a new string
 * return the new string
 * 
 */




function myReplace(str, before, after) {
  let newAfter = after.split('');
  let caseWord = ''; 
  let capital = before[0] === before[0].toUpperCase() 
  if (capital) {
  caseWord = newAfter[0].toUpperCase() + after.slice(1)
  } else {
  caseWord = newAfter[0].toLowerCase() + after.slice(1)
  }
  let newStr = ''; 
  let wordsArray = str.split(' ');
  let insertIndex = wordsArray.indexOf(before);
  let subArray = wordsArray.filter((word) => {
    return word !== before; 
  });
  subArray.splice(insertIndex, 0 , caseWord);
  newStr = subArray.join(' ');
  return newStr;
}



  




// console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// console.log(myReplace("Let us go to the store", "store", "mall"));
// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
console.log(myReplace("I think we should look up there", "up", "Down"));