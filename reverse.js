
function reversal(string) {
    debugger
    // var newString = string.split("");
    // var reverseString = newString.reverse();
    // var result = reverseString.join("");
    // // console.log(result);
    // return result; 

    let newString = string.split('').reverse().join("")
    return newString
}

console.log(reversal('happy'));