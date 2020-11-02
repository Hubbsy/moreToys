



// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.


/**Input - array of objects 
 * Ouput - an object 
 * 
 * return all objects from the given list that match the second argument provided
 * 
 * look through the collection
 * check if each element in the collection contains the source provided
 * if true, push that element into the arr, 
 * return the arr with the mathcing objects
 */





function whatIsInAName(collection, source) {
    let srcKeys = Object.keys(source)
    return collection.filter(pair => {
        return srcKeys.every(key => {
            return pair.hasOwnProperty && pair[key] === source[key];
        })
    })
}
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
  