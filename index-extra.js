// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXTRA 1");
console.log("Write a piece of code for reverting an array.");
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const revertedArray = originalArray.reverse();
console.log("Reversed Array: " + revertedArray);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXTRA 2");
console.log(
  "Write a piece of code for getting the maximum numerical value from an array."
);
console.log("The maximum numerical value is: ", Math.max(...originalArray));

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXTRA 3");
console.log(
  "Write a piece of code for getting the minimum numerical value from an array."
);
console.log("The minimum numerical value is: ", Math.min(...originalArray));

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

/* WRITE YOUR ANSWER HERE */ ("");
console.log("\nEXTRA 4");
console.log(
  "Write a piece of code for getting only even numerical values from an array."
);
const even = originalArray.filter((e, i) => i % 2);
console.log("The even numerical values are: ", even);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXTRA 5");
console.log(
  "Write a piece of code for deleting only even entries from an array."
);
function removeEvens(numbers) {
  return numbers.filter((n) => n % 2 !== 0); // if a number is even, remove it
}

const oddNumbers = removeEvens([1, 2, 3, 4, 5]);
console.log("The Array without evens: ", oddNumbers);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXTRA 6");
console.log("Write a piece of code for removing all the vowels from a string.");
const string = "hello world";
console.log("With vowels: ", string);
const noVowels = string.replace(/[aeiou]/gi, "");
console.log("Without vowels: ", noVowels);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXTRA 7");
console.log(
  "Write a piece of code for increasing all the numerical values in a array by 1."
);
let arr = [1, 2, 3, 4];
console.log("Original Array: ", arr);
arr = arr.map(function (val) {
  return ++val;
});
console.log("Modified Array: ", arr);

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */
console.log("\nEXTRA 8");
console.log("Replace all the strings contained in an array with their length.");
let stringArray = ["Strive", "is", "great"];
console.log("String Array is: ", stringArray);
const newArray = [];

for (i = 0; i < stringArray.length; i++) {
  const wordLength = stringArray[i].length;
  newArray.push(wordLength);
}
console.log("Equivalent length Array is: ", newArray);
