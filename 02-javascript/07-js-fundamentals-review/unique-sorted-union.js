function uniteUnique(arrays) {
  const uniqueValues = [];

  for (const arg of arguments) {
    for (const a of arg) {
      if (!uniqueValues.includes(a)) {
        uniqueValues.push(a);
      }
    }
  }

  return uniqueValues;
}
