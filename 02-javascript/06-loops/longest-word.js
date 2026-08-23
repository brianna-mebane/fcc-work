function findLongestWordLength(sentence) {
    const splitSentence = sentence.split(" ");
    let longestWord = ""

    for (let i = 0; i < splitSentence.length; i++) {
        let word = splitSentence[i];
        if (word.length >= longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord.length;
}