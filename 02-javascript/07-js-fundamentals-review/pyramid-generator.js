function pyramid(char, int, bool) {
  const rows = [];
  const space = " ";

  for (let i = 1; i <= int; i++) {
    const spaces = space.repeat(int - i);
    const level = char.repeat(2 * i - 1);
    const row = "\n" + spaces + level;
    rows.push(row);
  }

  let pyramid = "";

  if (bool === true) {
    for (let i = rows.length - 1; i >= 0; i--) {
      pyramid += rows[i];
    }
  } else {
    for (let i = 0; i < rows.length; i++) {
      pyramid += rows[i];
    }
  }

  return pyramid + "\n";
}