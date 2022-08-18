var longestWord = function (words) {
    if (!words || words.length == 0) return "";
    let res = "";
    let set = new Set(); //store valid word
    words.sort(); //sort string 
    for (let word of words){
        let prev = word.substring(0, word.length -1);
        if (word.length == 1 || set.has(prev)){  //store only one char, or has word before itself
            res = (word.length > res.length) ? word : res;
            set.add(word);
        }
    }
    return res;
};

console.log(longestWord(["w", "wo", "wor", "worl", "world"])) // world
console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"])) // apple
console.log(longestWord(["m","mo","moc","moch","mocha","l","la","lat","latt","latte","c","ca","cat"])) // latte