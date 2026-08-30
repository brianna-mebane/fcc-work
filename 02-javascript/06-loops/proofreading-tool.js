function isPalindrome(word) {
    let wordReversed = "";

    for (let i = word.length - 1; i >= 0; i--) {
        wordReversed += word[i];
    }

    for (let i = 0; i < word.length; i++) {
      if (wordReversed[i] !== word[i].toLowerCase() && wordReversed[i] !== word[i].toUpperCase()) {
        return false;
      }
    }

    return true;
}