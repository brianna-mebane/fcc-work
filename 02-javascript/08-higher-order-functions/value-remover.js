function destroyer(arr, ...args) {
  const goodNums = arr.filter((num) => !args.includes(num));

  return goodNums;
}
