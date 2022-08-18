function getShortestPath(amount, coins) {
  if (amount === 0) return [[]];
  if (amount < 0) return null;
  let result = [];

  for (const coin of coins) {
    const remainder = amount - coin;
    const remainderResult = getShortestPath(remainder, coins);
    if (remainderResult != null) {
        const targetWays = remainderResult.map(i => [coin, ...i]);
        //result = [...result, coin];
        result.push(...targetWays);
    }
  }

  return result;
}

function shortestRoute(coins) {
  if (coins.length === 0) return 0;

  const amount = coins.reduce((a, b) => a + b, 0);
  const path = getShortestPath(amount, coins);
  let length = 0;
  path.map((i) => i.length > length && (length = i.length));
  return length;
}

console.log(shortestRoute([5, 2, 1]));
