// Mike Prelesnik
// 1/22/19
// js-review2.js

//test Object
var obj = {here: {is: "an"}, object: 2};

//test cases
console.log(objEquals(obj, obj));
// → true

console.log(objEquals(obj, {here: 1, object: 2}));
// → false

console.log(objEquals(obj, {here: {is: "an"}, object: 2}));
// → true

console.log(objEquals(obj, {here: {is: "an"}, object: 0}));
// → false

console.log(objEquals(obj, {here: {is: "another"}, object: 2}));
// → false

console.log(objEquals(obj, {here: {isnt: "an"}, object: 2}));
// → false

console.log(objEquals(obj, {here: {is: "an", deep: {poop: null, value: -1}}, object: 2}));
// → false

var arr = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arr));
// → [1, 2, 3, 4, 5, 6]



//test to make sure the keys are what I expected
//let validKeys = Object.keys(obj);
//console.log(validKeys);

function objEquals(object1, object2)
{

    //get the arrays of keys for both Objects
    let keys1 = Object.keys(object1);
    let keys2 = Object.keys(object2);

    //if the Objects do not have the same quantity of properties, return false
    if (keys1.length !== keys2.length)
    {
        return false;
    }

    //for each key in the first Object...
    for (let i = 0; i < keys1.length; i++)
    {
        //if it is not the same as the other Object
        //return false
        if (keys1[i] !== keys2[i])
        {
            return false;
        }

        //after testing the keys, test the values
        if (JSON.stringify(object1) !== JSON.stringify(object2))
        {
            return false;
        }
    }
    //if no problems are reached
    return true;
}

function flatten(array)
{
    //define the new array to hold all the values
    let flattened = [];

    array.reduce(function(accumulator, currentValue){
        //reassign the values to the new array
        flattened = flattened.concat(currentValue);
    }, 0);

    //return the new array
    return flattened;
}