const coinChange_ = function (coins, amount, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount < 0) return -1;
  if (amount === 0) return 0;

  let minChange = Infinity;
  for (const coin of coins) {
    const count = coinChange(coins, amount - coin);
    if (count === -1) {
      continue;
    }
    minChange = Math.min(minChange, count + 1);
  }
  memo[amount] = minChange === Infinity ? -1 : minChange;
  return memo[amount];
};








// Minimum way to make coins

function coinChange(coins, amount) {
  if(amount < 0) return -1;
  if(amount === 0) return 0;

  let minWays = Infinity;
  for(const coin of coins) {
    const remainder = amount - coin;
    const ways = coinChange(coins, remainder);
    if(ways === -1) {
      continue;
    }
    minWays = Math.min(minWays, ways+1);
  }
  return minWays === Infinity ? -1 : minWays;
}




console.log(coinChange([1, 2, 5], 11)); //3
console.log(coinChange([2], 3)); //-1
console.log(coinChange([1], 0)); // 0
console.log(coinChange([1], 1)); // 1
console.log(coinChange([1], 2)); // 2 
