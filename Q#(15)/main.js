var guests = ["MUJAHID", "AFZAL", "REHAN", "FARHAN"];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
var ReplaceName = "REHAN";
console.log("".concat(ReplaceName, " can't make it to dinner."));
var newGuest = "SALMAN";
guests[guests.indexOf(ReplaceName)] = newGuest;
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
