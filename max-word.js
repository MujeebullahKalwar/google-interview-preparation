function maxWord(S, D) {
    const letterMap = {};
    for (let i = 0; i < S.length; i++) {
        letterMap[S[i]] = true; // {a: 0, b: 1, p: 0}
    }
    let maxWord = '';
    for (const item of D) {
        let matched = false;
        const possiblePossitions = {};
        S.split('').filter(l => item.includes(l)).map((_, __) => {
            if (possiblePossitions[_]) possiblePossitions[_].push(__);
            else possiblePossitions[_] = [__];
        });
        for (let i = 0; i < item.length; i++) {
            if (item[i] in letterMap && possiblePossitions[item[i]].includes(i)) {
                matched = true;
            } else {
                matched = false;
                break;
            }
        }
        if (matched && item.length > maxWord.length) {
            maxWord = item;
        }
    }
    return maxWord;
}

console.log(maxWord("abpplee", ["able", "ale", "apple", "bale", "kangaroo"]))