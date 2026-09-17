function titleCase(str) {
  str = str.split(" ");
  const newString = [];

  for (const s of str) {
    newString.push(s[0].toUpperCase() + s.slice(1).toLowerCase());
  }

  return newString.join(" ");
}
