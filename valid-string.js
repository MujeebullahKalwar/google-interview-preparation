
function isStringValid(str) {
    const startingBraces = ['[', '{', '('];
    const endingBraces = [']', '}', ')'];
    const stack = [];
    str = str.split('');
    for (const character of str) {
        if (startingBraces.includes(character)) {
            stack.push(character);
        } else if (endingBraces.includes(character)) {
            const index = startingBraces.indexOf(stack.pop());
            if (endingBraces[index] !== character) {
                return false;
            }
        }
    }
    return stack.length === 0;
}


console.log(isStringValid("[abcaasd]"));
console.log(isStringValid("[ab(c{a}a)sd]"));