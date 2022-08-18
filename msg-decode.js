function numDecodings(s) {
  const memo = {};
  memo[""] = 1;
  return countNumWays(s, memo);
}

function countNumWays(s, memo) {
  if (s.startsWith("0")) return 0;
  if (s in memo) return memo[s];

  let ways = countNumWays(s.substring(1), memo);

  const twoDigits = s.length > 1 ? +s.substring(0, 2) : 0;
  if (twoDigits > 0 && twoDigits <= 26) {
    ways += countNumWays(s.substring(2), memo);
  }
  memo[s] = ways;
  return ways;
}

console.log(numDecodings("12")); // 2
console.log(numDecodings("226")); // 3
console.log(numDecodings("111")); // 3
