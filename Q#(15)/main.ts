
let guests: string[] = ["MUJAHID", "AFZAL", "REHAN", "FARHAN"];

guests.forEach(guest => {

    console.log(`Dear ${guest}, would you like to join me for dinner?`);


});

let ReplaceName = "REHAN";

console.log(`${ReplaceName} can't make it to dinner.`);


let newGuest = "SALMAN";

guests[guests.indexOf(ReplaceName)] = newGuest;


guests.forEach(guest => {

    console.log(`Dear ${guest}, would you like to join me for dinner?`);
    
});
