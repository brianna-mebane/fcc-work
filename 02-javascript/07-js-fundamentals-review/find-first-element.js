function findElement(array, fun) {
  for (const element of array) {
    if (fun(element)) {
      return element;
    }
  }

  return undefined;
}
