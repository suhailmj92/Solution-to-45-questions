let age: number = 33;

if (age < 2) {
  console.log("BABY");
} else if (age < 4) {
  console.log("TODLER.");
} else if (age < 13) {
  console.log("CHILD");
} else if (age < 20) {
  console.log("TEENAGER");
} else if (age < 65) {
  console.log("ADULT");
} else {
  console.log("ELDER");
}

//OUTCOME MUST BE ADULT , COZ 33 IS BETWEEN 20 AND 65.
