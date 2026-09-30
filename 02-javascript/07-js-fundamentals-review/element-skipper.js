function dropElements(arr, func) {
  for (const a of arr) {
    if (func(a)) {
      const i = arr.indexOf(a);

      return arr.slice(i);
    }
  }

  return [];
}
