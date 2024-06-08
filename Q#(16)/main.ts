let guests: string[] = ["MUJAHID", "AFZAL", "REHAN", "FARHAN"];

console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Hira");

guests.splice((guests.length / 2)+1, 0, "Ayesha");

guests.push("Fatima");

guests.forEach(guest => {

    console.log(`Dear ${guest}, would you like to join me for dinner?`);
    
});