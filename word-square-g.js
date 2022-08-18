function wordSquare(words) {
  const Kmap = {};
  for (const word of words) {
    if (Kmap[word[0]]) Kmap[word[0]]++;
    else Kmap[word[0]] = 1;
  }
  const matched = [];
  for (const word of words) {
    if (word[0] in Kmap) {
      const map = Object.assign({}, Kmap);
      for (let i = 0; i < word.length; i++) {
        if (map[word[i]]) {
          map[word[i]]--;
          if (map[word[i]] <= 0) delete map[word[i]];
          if (i === word.length - 1) matched.push(word);
        } else {
          break;
        }
      }
    }
  }
  return matched.map((i) => {
    return i.split("").map((j) => words.find((w) => w.startsWith(j)));
  });
}

console.log(wordSquare(["AREA", "BALL", "DEAR", "LADY", "LEAD", "YARD"]));
console.log(wordSquare(["abcd", "bnrt", "crm", "dt"]));

