function canSum(target, numbers) {
  const table = Array(target + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target; i++) {
    if (table[i] === true) {
      for (const num of numbers) {
        table[i + num] = true;
      }
    }
  }
  return table[target];
}

console.log(canSum(5, [50, 2, 4, 1]));
console.log(canSum(300, [7, 14]));
