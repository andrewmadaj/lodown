'use strict';

// YOU KNOW WHAT TO DO //




/**
 * identity: Designed to take any value and return that value unchanged.
 * 
 * @param {any datatype} value: The value to return.
 * @return {any datatype} value: The returned unchanged.
 */
function identity(value) {
    return value;
}
module.exports.identity = identity;






/**
 * typeOf: Designed to take a value and return that value's datatype as a string.
 * 
 * @param {any datatype} value: The value to find type of.
 * @return {string} string: A string representing the datatype of value.
 */
function typeOf(value) {
    // takes a value
    // returns the datatype of value
    // create an if statement to test the six values that are acurately represented by typeof
    if (typeof value === "string") {
        return "string";
    } 
    if (typeof value === "number") {
        return "number"
    }
    if (typeof value === "undefined") {
        return "undefined";
    }
    if (typeof value === "boolean") {
        return "boolean";
    }
    if (typeof value === "function") {
        return "function";
    }
    // for all other types (which must be objects), test to see if they are typof
    // === objects, then subtest for null and array. If they're neither of those, they must be object objects
    if (typeof value === "object") {
        if (Array.isArray(value)) {
            return "array"
        } 
        if (value === null) {
            return "null";
        }
        if (typeof value === "object"){
            return "object";
        }
    }
}
module.exports.typeOf = typeOf;









/**
 * first: Designed to take an array and a number and return either [], the element 
 * at the first index of array, or the first x number(s) of elements in the array in 
 * a new array.
 * 
 * @param {array} array: Array to find first value(s) of.
 * @param {number} number: The first <number> of elements to return
 * @return {array or value(s)}: An empty array, an array with several numbers from 
 * the start of the array to specified number, or first index of array.
 */
function first(array, number) {
    // if array !== array, return an empty [];
    // if number === undefined || number === NaN, return first element in array i.e. array[0]
    // if array doesnt meet any one of these criteria, return the first x number of elements in array. use slice
    if (!Array.isArray(array) || number < 0) {
        
        return [];
    } 
    if (number === undefined || isNaN(number) === "NaN") {
        return array[0];
    } 
    if (Array.isArray(array) || number !== undefined || isNaN(number) !== "NaN") {
        return array.slice(0, number);
    }
    
}
module.exports.first = first;





/**
 * last: Designed to take an array and a number and return either [], the element 
 * at the last index of array, or the last x number(s) of elements in the array in 
 * a new array.
 * 
 * @param {array} array: Array to find last value(s) of.
 * @param {number} number: The last <number> of elements to return
 * @return {array or number}: An empty array, an array with several numbers from 
 * the end of the array to specified number back, or last index of array.
 */
function last(array, number) {
    if (!Array.isArray(array) || number < 0) {
        
        return [];
    } 
    if (number === undefined || isNaN(number) === "NaN") {
        return array[array.length - 1];
    } 
    if (Array.isArray(array) || number !== undefined || isNaN(number) !== "NaN") {
        return array.slice(-number);
    }
}      
module.exports.last = last;





/**
 * indexOf: Designed to take an array and a value, and look through the array for
 * the first instance of which matches the value. When it finds a match, function 
 * returns the index of that instance. If no instance is found in the array, returns
 * null. 
 * 
 * @param {array} array: The array within which to find the first occurance of value.
 * @param {value} value: The value to look for the first instance of in array.
 * @return {number} index or -1: Return -1 if no instance is found, or return index
 * of element with first instance of value.
 */
function indexOf(array, value) {
   
    var index = null;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            index = i;
            i = array.length;
        }
    }
    if (index === null) {
        return -1;
    } else {
        return index;
    }
}
module.exports.indexOf = indexOf;







/**
 * contains: Designed to take an array and a value and return true if the array
 * contains the value or false if it does not. 
 * 
 * @param {array} array: The array to search.
 * @param {any datatype} value: The value to search for.
 * @return {boolean} true or false: Returns true or false based on the existence 
 * or nonexistence of the given value in the array.
 */
function contains(array, value) {
    // takes two param: an array and a value
    // return true if the array contains value
    // return false if it's not found
    
    // condition ? value if true : value if false

    return array.includes(value) ? true : false;
        
}  

module.exports.contains = contains;







/**
 * each: Designed to take a collection and a function, and perform the function 
 * on each element in the array. Returns nothing.
 * 
 * @param {collection} collection: The array or object on which to perform
 * the given function
 * @param {function} func: The function to perform on collection
 * @return: {none} none: none
 */
function each(collection, func) {
   // takes two args: a collection and a function
// if Array.isArray(collection) 
// { for loop that calls a function for each element with given list of arguments }
// if collection is an object
// { for loop that calls a function for each key with list of arguments
    console.log(collection);
    console.log(func);
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    }
    
    if (typeof collection === "object") {
        if (Array.isArray(collection)) {
            return;
        } 
        if (collection === null) {
            return
        }
        if (typeof collection === "object"){
            for (var key in collection) {
            func(collection[key], key, collection);
            }
        }
    }
} 

module.exports.each = each;









/**
 * unique: Designed to take an array and return a new array with all duplicates 
 * removed.
 * 
 * @param {array} array: The array to have duplicates removed
 * @return {array} newArray: Returns a new array containing the same values as 
 * the input array, but with all duplicates removed.
 */
function unique(array) {
// takes an array
// return a new array of elements from the given array with duplicates removed
// use the indexOf function above

// make an empty array variable
// array.indexOf(i)
var newArray = [];
for (var i = 0; i < array.length; i++) {
    if (indexOf(newArray, array[i]) === -1) {
        newArray.push(array[i]);
    }
}
return newArray;
}
module.exports.unique = unique;










/**
 * filter: Designed to take an array and a function and return a new array full
 * of all elements in the input array that returned true when passed through the
 * input function
 * 
 * @param {array} array: The array whose elements on which to perform the function
 * @param {function} func: The test function through which to pass the array's elements.
 * @return {array} newArray: An array full of values resulting from passing each
 * element of the input array through input function and getting a return of true.
 */
function filter(array, func) {
// takes two arguments: an array and a function
// call function for each element inside array passing the arguments (the current element, current index, parameter array)
// return a new array of elements for which calling function returned true

// create newArray
// for loop
    // each iteration call the function with the parameters (the current element, current index, parameter array)
    // make if statement inside look, use the above line as a condition, true = newArray.push(array[i])
// return newArray

var newArray = [];
for (var i = 0; i < array.length; i++) {
    if (func(array[i], i, array)) {
        newArray.push(array[i]);
    }
}
return newArray;
}
module.exports.filter = filter;








/**
 * reject: Designed to take an array and a function and return a new array full
 * of all elements in the input array that returned false when passed through the
 * input function
 * 
 * @param {array} array: The array whose elements on which to perform the test function.
 * @param {function} func: The function through which to pass the array's elements.
 * @return {array} falseArray: An array full of all values which returned false
 * when passed through the test function.
 */
function reject(array, func) {
    // takes array and a function
    // make an array called trueArray that is equal to the output array of filter(array, func) => returns an array with true values
    
    // loop through array
        // if the current element has an instance in trueArray, do nothing, else, push the current element to falseArray;
    // close loop
    
    // return falseArray

    var trueArray = filter(array, func);
    var falseArray = [];
    
    for (var i = 0; i < array.length; i++) {
        if (trueArray.includes(array[i])) {
            console.log(array[i])
        } else {
            falseArray.push(array[i]);
        }
    }
    return falseArray;
}
module.exports.reject = reject;








/**
 * partition: Designed to take an array and a function, and return an array consisting
 * of two arrays: one full of all values which resolved true when passed through
 * the test function, and one full of all values which resolved false when passed
 * through the test function.
 * 
 * @param {array} array: The array whose elements on which to perform the test function
 * @param {function} func: The function through which to pass the array.
 * @return {array} thirdArray: An array full of two arrays: true values in one, false
 * in the other. 
 */
function partition(array, func) {
    // takes an array
    // takes a function
    // create an array for true values
    // create an array for false values
    // loop through the array
        // if we call the function on current element in array with parameters: current element, index, array
        // and returns true, pass that element to a true array
        // else pass that element to a false array
    
        
    // push true and false arrays into third array
    // return third array
    
    var trueArray = [];
    var falseArray = [];
    
    for (var i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            trueArray.push(array[i]);
        } else {
            falseArray.push(array[i]);
            
        }
    }
    var thirdArray = [];
    
    thirdArray.push(trueArray);
    thirdArray.push(falseArray);
    
    return thirdArray;
    
}
module.exports.partition = partition;













/**
 * map: Designed to take an array and a function, and return a new array containing
 * all output values resulting from the passage of each element in collection through
 * the given function.
 * 
 * @param {collection} collection: The array or object whose elements on which to perform 
 * the function
 * @param {function} func: The function through which to pass the array or object's elements.
 * @return {array} newArray: An array consisting of the values resulting from passing 
 * each element through the given function.
 */
function map(collection, func) {
// takes a collection and a function
// make new var newArray
// if array 
        // loop through 
        // run func with: the current element, current index, collection
        // save the value of each function call in a new array
// else object
    // loop through
    // run func with: the value of current key, the key , collection
    // save the value of each function call in a new array
// close loop
// return newArray
var newArray = []
if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
        newArray.push(func(collection[i], i, collection));
    }
} else {
    for (var key in collection) {
        newArray.push(func(collection[key], key, collection))
    }
}
return newArray;
}
module.exports.map = map;









/**
 * pluck: Designed to take an array of objects and return an array full of all
 * values of property "property" in the given array.
 * 
 * @param {array of objects} array: The array of objects from which to retrieve 
 * values of property "prop" and place in an array.
 * @param {property} prop: The property in each object whose value will be returned
 * in the output array.
 * array
 * @return {array}: An array full of properties "prop" from each object whose
 * value to put in input array.
 */
function pluck(array, prop) {
// takes an array of objects
// takes a property
// return an array containing the value of property 
// use map on the array, and pass in an anonymous function that returns value of prop for that element

return  map(array, a => a[prop]);

}
module.exports.pluck = pluck;







/**
 * every: Designed to take an array or object and a test function. Returns true 
 * if function evaluates to true on all elements in collection or false if function
 * evaluates to false on one or more elements in collection.
 * 
 * @param {array or object} collection: The collection with elements on which to 
 * perform test function
 * @param {function} func: The test function to perform on each element in collection 
 * @return {boolean} true or false: A single boolean value that indicts if all
 * elements returned true when passed through test function or not.
 */
function every(collection, func) {
// takes two param: collection and a function
    
    // make flag
    let flag = null
    
    // if func is undefined
        // loop through collection
         // if any element is !true, flag
    
    // if collection is an array
        // loop
        // use params current element, index, collection
        // if resolve !true, flag 
    // if collection is an object
        // loop
        // use current value, current key, collection
        // if resolves !true: flag
    // if no function provided, loop through collection and if each element's value is truthy, return true.  else return             

    // if func is undefined
        // loop through collection
    
    // evaluate flag
    
            
    if (func === undefined) {
        if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (!collection[i]) {
                flag = false;
            } 
        }
    } else {
        for (var key in collection) {
            if (!collection[key]) {
                flag = false;
            }
        }
    }
    } else {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (!func(collection[i], i, collection)) {
                flag = false;
            }
        }
    } else {
        for (var key in collection) {
            if (!func(collection[key], key, collection)) {
                flag = false;
            }
        }
    }
    }
    if (flag === null) {
        return true;
    } else {
        return false;
    }
}
module.exports.every = every;






/**
 * some: Designed to take an array or object and a test function. Returns true 
 * if function evaluates to true on one or more elements in collection or false 
 * if function evaluates to false all elements in collection.
 * 
 * @param {array or object} collection: The collection with elements on which to 
 * perform test function
 * @param {function} func: The test function to perform on each element in collection 
 * @return {boolean} true or false: A single boolean value that indicts if one or 
 * more elements returned true when passed through test function or not.
 */
function some(collection, func) {
// call a function for every element of the collection with params: 
    // this is simply logical inversive of every function.
    // adjust .every accordingly to flag if false for all elements or not
    var flag = null;
    if (func === undefined) {
        if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            if (collection[i]) {
                flag = true;
            } 
        }
    } else {
        for (var key in collection) {
            if (collection[key]) {
                flag = true;
            }
        }
    }
    } else {
    if (Array.isArray(collection)) {
        if (reject(collection, func).length === collection.length) {
            return false;
        } else {
            return true;
        }
    } else {
        for (var key in collection) {
            if (collection[key]) {
                flag = true;
            }
        }
    }
    }
    if (flag === true) {
        return true;
    } else {
        return false;
    }
}
module.exports.some = some;






/**
 * reduce: Designed to take an array, and return the cummulative value of performing
 * the function on each element in the array
 * 
 * @param {array} array: The array on which to cummulatively perform the function
 * @param {function} func: The test function to perform on each element in collection 
 * @param {any datatype} seed: A default cummulative value given by the user.
 * @return {any datatype} previousR: The cummulative value that results from 
 * performing the function cummulatively on each element in the array.
 */
function reduce(array, func, seed){
    // Takes three parameters an array and a function and a seed
    // call the function for every element in collection passing the arguments: result of the function call on the previous element, element, and index.
    // on  the first iteration use the seed (var i = seed)
    // if no seed was given default to the beginning of the collection (only for arrays)
    // after the last iteration, return the value of the final function call
    
    if (seed !== undefined) {
        var previousR = seed;
        for (var i = 0; i < array.length; i++) {
            previousR = func(previousR, array[i], i);
            }
            return previousR;
    } else {
        var previousR = array[0];
        for (var i = 1; i < array.length; i++) {
            previousR = func(previousR, array[i], i); 
            }
            return previousR;
    }
};
module.exports.reduce = reduce;









/**
 * extend: Designed take any number of objects and return the first input object
 * with all key value pairs from all subsequent input objects added.
 * 
 * @param {object} object1: The intial object
 * @param {object} object2: The second object whose key:values will be added to 
 * object1.
 * @param {object} args: Subsequent, unlimited number of object whose elements to 
 * add to object1
 * @return {object} object1: An updated version of object1 with all subsequent 
 * object's key:values added to it.
 */
function extend(object1, object2, ...args){

for (var key in object2) {
    object1[key] = object2[key];
}
for (var i = 0; i < args.length; i++) {
    for (var key in args[i]) {
        object1[key] = args[i][key];
}
}
return object1;
} 
module.exports.extend = extend;