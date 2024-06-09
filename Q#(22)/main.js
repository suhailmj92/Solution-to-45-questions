var friends = ["Mujahid", "Baber", "Ahmed", "Polat"];
console.log(friends[4]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[3] = "Polat"; // index is 2 for Charlie.
console.log(friends[3]); // Correcting the error by accessing a valid index.
