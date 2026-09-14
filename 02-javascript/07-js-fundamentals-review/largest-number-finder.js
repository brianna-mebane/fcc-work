function largestOfAll(array) {
  const largestNums = [];

  for (const arr of array) {
    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }

    largestNums.push(largest);
  }

  return largestNums;
}
