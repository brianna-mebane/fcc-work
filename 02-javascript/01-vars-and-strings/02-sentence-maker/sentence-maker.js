// This is where I first declare the variables for the sentence maker.
let adjective = "beautiful";
let noun = "spotlight";
let verb = "eat";
let place = "Springfield";
let adjective2 = "crooked";
let noun2 = "basketball";

// This is where we concatenate our variables into our first story!
const firstStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". " + "The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

// Storytime (#1)!
console.log("First story: ".concat(firstStory));

// Alright, let's try some ... different words.
adjective = "pickled";
noun = "banana";
verb = "spying";
place = "London, England";
adjective2 = "hysterical";
noun2 = "steering wheel";

// Rewrite story template for second storytime.
const secondStory = "Once upon a time, there was a(n) " + adjective + " " + noun + " who loved to eat " + noun2 + ". " + "The " + noun + " lived in a " + place + " and had " + adjective2 + " nostrils that blew fire when it was " + verb + ".";

// Storytime (#2)!
console.log("Second story: ".concat(secondStory));