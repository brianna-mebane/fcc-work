function steamrollArray(arr) {
  const flattenedArray = [];

  function flatten(element) {
    if (Array.isArray(element)) {
      for (const e of element) {
        flatten(e);
      }
    } else {
      flattenedArray.push(element);
    }
  }

  flatten(arr);

  return flattenedArray;
}
