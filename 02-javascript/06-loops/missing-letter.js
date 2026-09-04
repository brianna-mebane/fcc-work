function fearNotLetter(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < alphabet.length; i++) {
    if (str[0] === alphabet[i]) {
      const slice = alphabet.slice(i);

      for (let j = 0; j < slice.length; j++) {
        if (!str.includes(slice[j])) {
          return slice[j];
        }
      }
    }
  }
}