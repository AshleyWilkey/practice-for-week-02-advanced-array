/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function (string) {
  // Your code here
  const vowels = /([aeiou])/gi;
  const vowelMatch = string.match(vowels).length;
  return vowelMatch > 3;
};

// let hasThreeVowels = function (string) {
//   return (
//     string.split("").reduce((acc, val) => {
//       if (vowels.test(val) && !acc.includes(val)) {
//         return acc + val;
//       }
//       return acc;
//     }, "").length > 3
//   );
// };

// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hasThreeVowels;
} catch (e) {
  module.exports = null;
}
