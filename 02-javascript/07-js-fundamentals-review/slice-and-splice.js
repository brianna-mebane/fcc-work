function frankenSplice(arr1, arr2, index) {
  const newArr = [];

  for (const element of arr2) {
    newArr.push(element);
  }

  for (let i = 0; i < arr1.length; i++) {
    newArr.splice(i + index, 0, arr1[i]);
  }

  return newArr;
}