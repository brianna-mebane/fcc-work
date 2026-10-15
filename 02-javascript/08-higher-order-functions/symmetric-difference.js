function diffArray(arr1, arr2) {
  const firstDiffs = arr1.filter((a) => !arr2.includes(a));
  const secondDiffs = arr2.filter((a) => !arr1.includes(a));

  return firstDiffs.concat(secondDiffs);
}
