// Mutating
push()      // Insert an element at the end
pop()       // Remove an element from the end
unshift()   // Inserts an element in the beginning
shift()     // Remove first element
// Iterating
forEach()   // Iterates an array
filter()    // Iterates an array and result is filtered array
map()       // Iterates an array and result is new array
reduce()    // "Reduces" the array into single value (accumulator)
// Others
slice()     // Returns desired elements in a new array
concat()    // Append one or more arrays with given array

const array = [1, 2, 3, 4]
array.push(10) // 5 (push returns the length of the new array)
// array = [1, 2, 3, 4, 10]

const array = [1, 2, 3 , 4]
array.pop() // 4 (pop returns the element removed)
// array = [1, 2, 3]

const array = [1, 2, 3, 4]
array.unshift(9, 10) // 6 (unshift returns the length of new array)
// array = [9, 10, 1, 2, 3, 4] 

const array = [1, 2, 3, 4]
array.forEach((element, index) => {
   console.log(`Element ${element} at index ${index}`)})

const array = [1, 2, 3, 4];
const filteredArray = array.filter(element => element%2)
// array = [1, 2, 3, 4]
// filteredArray = [1, 3]

const array = [1, 2, 3, 4]
const mapArray = array.map(element => element * 2)
// array = [1, 2, 3, 4]
// mapArray = [2, 4, 6, 8]


const array = [1, 2, 3, 4]
const result = array.reduce((accumulator, current) => (
   accumulator + current
), 10)
// array = [1, 2, 3, 4]
// result = 20


const array = [1, 2, 3, 4]
const slicedArray = array.slice(0, 2)
// array = [1, 2, 3, 4]
// slicedArray = [1, 2]

const array = [1, 2, 3, 4]
const concatArray = array.concat([5, 6, 7, 8])
// array = [1, 2, 3, 4]
// concatArray = [1, 2, 3, 4, 5, 6, 7, 8]