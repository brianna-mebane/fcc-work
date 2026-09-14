function reverseString(str) {
  let stringReversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    stringReversed += str[i];
  }

  return stringReversed;
}