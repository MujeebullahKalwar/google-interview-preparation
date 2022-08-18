function canConstruct(str, words, memo = {}) {
  if (str in memo) return memo[str];
  if (str === "") return 1;

  let totalCount = 0;
  for (const word of words) {
    if (str.indexOf(word) === 0) {
      const numWays = canConstruct(str.slice(word.length), words, memo);
      totalCount += numWays;
    }
  }
  memo[str] = totalCount;
  return totalCount;
}

console.log(canConstruct("purple", ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
