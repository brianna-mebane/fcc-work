const question1 = {
    category: "Sports",
    question: "In what year did the NBA get its official name?",
    choices: ["1947", "1949", "1946"],
    answer: "1949"
}

const question2 = {
    category: "Geography",
    question: "Belize shares a western border with which other Central American country?",
    choices: ["Guatemala", "Honduras", "Mexico"],
    answer: "Guatemala"
}

const question3 = {
    category: "Movies & Cinema",
    question: "What was the first movie to win Best Animated Feature at the Academy Awards?",
    choices: ["Spirited Away", "Treasure Planet", "Shrek"],
    answer: "Shrek"
}

const question4 = {
    category: "Science & Tech",
    question: "Who created the popular programming language Python?",
    choices: ["Guido van Rossum", "Linus Torvalds", "Bill Gates"],
    answer: "Guido van Rossum"
}

const question5 = {
    category: "Music",
    question: "Which album is NOT a record released by Janet Jackson?",
    choices: ["The Velvet Rope", "Rhythm Nation", "CTRL"],
    answer: "CTRL"
}

const questions = [question1, question2, question3, question4, question5];

function getRandomQuestion(questions) {
    const randomNum = Math.floor(Math.random() * questions.length);

    return questions[randomNum];
}