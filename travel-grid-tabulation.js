function travelGrid(m, n) {
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  table[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (i < m) table[i + 1][j] += current;
      if (j < n) table[i][j + 1] += current;
    }
  }
  console.log(table)
  return table[m][n];
}

console.log(travelGrid(18, 18));
