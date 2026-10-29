function whatIsInAName(arr, source) {

  const sourceKeys = Object.keys(source);

  const hasSourceKeys = arr.filter(obj => sourceKeys.every(key => Object.hasOwn(obj, key)));

  const sameValuesAsSource = hasSourceKeys.filter(obj => sourceKeys.every(key => obj[key] === source[key]));

  return sameValuesAsSource;
}
