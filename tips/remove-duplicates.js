// This array has a duplicate value
const arrayWithDuplicateValue = [1,2,3,4,4,5];

// To remove the duplicate value you can use a Set
const set = new Set(arrayWithDuplicateValue)

// Now the constant set contains `Set(5){ 1, 2, 3, 4, 5 }`
// Only one `4` remains in the Set
// Now we need to convert the Set back to an array
const arrayResult = Array.from(set);
console.log(arrayResult);

// And the oneliner version
const arrayResultOneLiner = [... new Set([1,2,3,4,4,5])];