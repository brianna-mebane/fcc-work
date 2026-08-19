/* 
CODE AUTHOR: BRIANNA MEBANE.
DATE CREATED: AUGUST 10, 2026.
ASSIGNMENT: JAVASCRIPT FORTUNE TELLER.
*/

// This is where I initialize the five fortunes to potentially be told later.
const fortune1 = "Spend some time outside today; the sun has something to say.";
const fortune2 = "Listen closely to the silence; it speaks the loudest.";
const fortune3 = "The grass is only greener where it is watered. Start pouring.";
const fortune4 = "Love carries many scents. Do not mistake the unique for the unpleasant.";
const fortune5 = "A ship in harbor may be safe, but it's time to set sail.";

const randomNumber = Math.ceil(Math.random() * (5 - 1) + 1);
let selectedFortune = "";

if (randomNumber == 1) {
    selectedFortune = fortune1;
} else if (randomNumber == 2) {
    selectedFortune = fortune2;
} else if (randomNumber == 3) {
    selectedFortune = fortune3;
} else if (randomNumber == 4) {
    selectedFortune = fortune4;
} else {
    selectedFortune = fortune5;
}

console.log(selectedFortune);