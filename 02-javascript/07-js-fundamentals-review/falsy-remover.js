function bouncer(arr) {
  const truthies = [];
  const falsies = [false, null, 0, "", undefined, NaN];

  for (const a of arr) {
    if (!(falsies.includes(a))) {
      truthies.push(a);
    }
  }

  return truthies;
}