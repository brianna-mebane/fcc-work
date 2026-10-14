function getIndexToIns(array, num) {
  if (array.length === 0) {
    return 0;
  }

  array.sort((a, b) => a - b);

  const largerThanNumber = (element) => element >= num;

  const firstIndex = array.findIndex(largerThanNumber);

  if (firstIndex === -1) {
    return array.length;
  } else return array.findIndex(largerThanNumber);
}
