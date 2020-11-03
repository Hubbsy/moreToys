// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

/**Input -
 * output
 * 
 * transform the input string and insert a dash between each word in the string.  the entire string must also be lower case.
 * 
 * create a helper function to lowercase the string, if the string is with spaces, split the string on the white space and rejoin the string on a dash.
 * 
 */



function spinalCase(str) {

    if(str.includes(' ')) {
        let loweredString = lowerCase(str)
        let splitString = loweredString.split(' ');
        let joinedString = splitString.join('-')
        return joinedString;
    }

    if (!str.includes(' ')) {
        let splitString = str.replace(/([a-z](?=[A-Z]))/g, '$1 ').replace(/\W|_/g, '-');
        let loweredString = lowerCase(splitString);
        return loweredString;

        // var splitArr= str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\W|_/g, '-');
        // str = splitArr.toLowerCase();
        // return str;
    }

}

function lowerCase(str) {
    return str.toLowerCase();
}
  console.log(spinalCase('This Is Spinal Tap'));
//   console.log(spinalCase('thisIsSpinalTap'));
//   console.log(spinalCase('TheAndyGriffith_Show'));
//   console.log(spinalCase('AllThe-small Things'));
