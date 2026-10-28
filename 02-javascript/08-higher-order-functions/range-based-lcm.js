function smallestCommons(arr) {
  arr = arr.sort((a, b) => a - b);

  const min = arr[0];
  const max = arr[1];

  const nums = [];

  for (let i = min; i <= max; i++) {
    nums.push(i);
  }

  let lcm = max;
  let allDivisible = false;

  while (!allDivisible) {
    allDivisible = nums.every((num) => lcm % num === 0);

    if (allDivisible) {
      return lcm;
    }

    lcm += max;
  }
}

console.log(smallestCommons([23, 18]));
