


// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

// - If a word begins with a vowel, just add "way" at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

/**Input -string
 * Output -string modified
 * 
 * modify the input string and apply pigLatin based on the starting letter in the string.  if a word does not begin with a vowel, move the first character to the end of the word and add 'ay', otherwise, add 'way' to the end of the word.
 * 
 * access the input string characters
 * check if the character is a vowel or not, 
 * if it is a vowel, add 'way to the str and return the string
 * otherwise, move first char in string to the end of the string
 * add 'ay' to the modified string and return the string
 */


function translatePigLatin(str) {
  //crete a copy of str
  let strCopy = str; 
  let result = '';
  //create a var to signify a vowel
  let vowel = (char) => {
    if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
      return true; 
    } else {
      return false; 
    }
  };
  //split the copy into an array of chars
  let charsArray = strCopy.split('');
   //store the value at index 0 
  let firstValue = charsArray[0];
  let firstHalf; 
  let secondHalf;
    //check if the char at index 0 is a vowel
    if (vowel(firstValue)) {
      //if true, add 'way'to the result and return the new string 
      result = strCopy + 'way';
      return result;  
    } 
    
      //iterate through the charsArray
      for (let i = 1; i < charsArray.length; i++ ) {
        let letter = charsArray[i];
        //check if each value is a vowel,
        if (vowel(letter)) {     
           firstHalf = charsArray.slice(0, i);
          //if true, cut the array from the vowel to the end and the beginning to the vowel
           secondHalf = charsArray.slice(i);
           //join the beginning part to the end of the last part
          //add 'ay' to the end of the new joined string and return it 
          let latinString = secondHalf.concat(firstHalf).join('');
          return latinString + 'ay';
        } 
    }
    if (!str.includes(vowel())) {
      return str + 'ay';
    }
}

// console.log(translatePigLatin("consonant")); // should return "onsonantcay"
// console.log(translatePigLatin("california")); //should return "aliforniacay".

// console.log(translatePigLatin("paragraphs")); //should return "aragraphspay".

// console.log(translatePigLatin("glove")); //should return "oveglay".

// console.log(translatePigLatin("algorithm")); //should return "algorithmway".


console.log(translatePigLatin('schwartz'));  //should return "artzschway"