function canConstruct(str, words, memo = {}) {
  if(str in memo) return memo[str];
  if (str === "") return true;
  for (const word of words) {
    if (str.indexOf(word) === 0) {
      const suffix = str.slice(word.length);
      if(canConstruct(suffix, words, memo) === true) {
        memo[str] = true;
        return true;
      }
    }
  }
  memo[str] = false;
  return false;
}

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
