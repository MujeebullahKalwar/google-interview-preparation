function stringDecomp(str) {
    if (!str.includes('[')) return str;
    let result = '';
    let word = '';
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        if (!isNaN(str[i])) {
            let n = '';
            count = 0
            while (str[i] != '[') {
                n += str[i];
                i++;
            }
            count = Number(n);
        }
        if (str[i] == '[') {
            i++;
            let skip = 0;
            while (true) {
                if (str[i] == ']' && skip == 0) break;
                if (str[i] == '[') skip++;
                if (str[i] == ']') skip--;
                word += str[i]
                i++;
            }
            result += (stringDecomp(word)).repeat(count);
            word = '';
        }
        if (str[i] != '[' && str[i] != ']') {
            result += str[i];
        }
    }
    return result;
}

console.log(stringDecomp("2[3[a]b]")); 
// aaabaaab
// aaabaaab

console.log(stringDecomp("3[abc]4[ab]c")); 
// abcabcabcababababc
// abcabcabcababababc