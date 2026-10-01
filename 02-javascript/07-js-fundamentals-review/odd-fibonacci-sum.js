function sumFibs(int) {
  let sum = 0;

  let lastNum = 0;
  let currentNum = 1;

  while (currentNum <= int) {
    if (currentNum % 2 !== 0) {
      sum += currentNum;
    }

    let nextNum = lastNum + currentNum;
    lastNum = currentNum;
    currentNum = nextNum;
  }

  return sum;
}
