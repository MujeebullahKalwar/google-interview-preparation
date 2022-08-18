function howSum(targetSum, numbers, memo = {}) {
    if(targetSum === 0) return [];
    if(targetSum < 0) return null;

    for(const num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if(remainderResult !== null) {
            return [...remainderResult, num];
        }
    }

    return null;
}

// O(m*n)

console.log(howSum(7, [2,3]));
// console.log(howSum(300, [7,14]));




function howSum(targetSum, numbers) {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= targetSum; i++) {
        if (Array.isArray(table[i])) {
            for (const num of numbers) {
                const newArray = [...table[i], num];
                table[i + num] = newArray;
            }
        }
    }
    return table[targetSum]
}


function howSumRecursve(targetSum, numbers) {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (const num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSumRecursve(remainder, numbers);
        if (remainderResult != null) {
            return [num, ...remainderResult];
        }
    }
    return null;
}


console.log(howSumRecursve(7, [5, 4, 3]));
console.log(howSum(7, [5, 4, 3]));