function bestSum(target, numbers) {
  const table = Array(target + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (const num of numbers) {
        table[i + num] = [...table[i], num];
      }
    }
  }
  
  return table[target];
}

console.log(bestSum(7, [2,3]));
console.log(bestSum(300, [7, 14]));
