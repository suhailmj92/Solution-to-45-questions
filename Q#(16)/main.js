var guests = ["MUJAHID", "AFZAL", "REHAN", "FARHAN"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Hira");
guests.splice((guests.length / 2) + 1, 0, "Ayesha");
guests.push("Fatima");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
