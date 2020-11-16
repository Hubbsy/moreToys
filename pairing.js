

// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

/**Input - string
 * Ouput - array of arrays
 * Constraints - result must be 2d array
 * Edge Cases - 
 * 
 * access each letter of the input string.  check what the letter is and add its correpsonding match.  store the current letter and its pair in an array, push that array into a result array.  return the result array.    
 */

function pairElement(str) {
  let result = [];
  //split the array into each letter
  let lettersArray = str.split('');
  //iterate throug the letters array
  // console.log(lettersArray)
  lettersArray.map(letter => {
    let pairs = []
    if (letter === "G") {
      pairs.push(letter, "C")
    }
    if (letter === "C") {
      pairs.push(letter, "G")
    }
    if (letter === "A") {
      pairs.push(letter, "T")
    }
    if (letter === "T") {
      pairs.push(letter, "A")
    }
    result.push(pairs)
  })
  //check what the current letter is
  //push the current letter and its matching letter into an array
  //push the pairs array into the result array
  return result; 
}

console.log(pairElement("GCG")); //should return [["G", "C"], ['C', "G"], ["G", "C"]]
console.log(pairElement("ATCGA"))// should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]])

console.log(pairElement("TTGAG")) //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

console.log(pairElement("CTCTA")) //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]