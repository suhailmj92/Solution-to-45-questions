// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("apple" == "Apple"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is not in a array
var fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' not in fruits?");
console.log(!fruits.includes("apple")); // False
// Test whether an item is in a array
console.log("Is 'mango'  in fruits?");
console.log(fruits.includes("mango")); // False
