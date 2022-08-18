function hasSum_solution_4(arr, sum, memo = {}) {
    const hashMap = {};
    for (const item of arr) {
        const remainder = sum - item;
        if (hashMap[remainder]) {
            return true;
        } else {
            hashMap[remainder] = true;
        }
    }
    return false;
}

function hasSum_solution_3(arr, sum, memo = {}) {
    if (memo[sum]) return memo[sum];
    if (sum === 0) return true;
    if (sum < 0) return false;
    for (const num of arr) {
        const remainder = sum - num;
        if (hasSum_solution_3(arr, remainder, memo)) {
            memo[sum] = true;
            return true;
        }
    }
    memo[sum] = false;
    return false;
}

function hasSum_solution_2(arr, sum) {
    const hashMap = {};
    for (const item of arr) {
        if (sum === item) return true;
        if (item <= sum) {
            hashMap[item] = true;
        }
    }
    for (const item of arr) {
        const remainder = sum - item;
        if (hashMap[remainder]) return true;
    }
    return false;
}

function hasSum_solution_1(arr, sum) {
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (i != j) {
                if (num + arr[j] === sum) {
                    console.log(j, arr[j], num);
                    return true;
                }
            }
        }
    }
    return false;
}


console.time('s')
// console.log(hasSum_solution_1([1, 2, 4, 4], 8))
console.log(hasSum_solution_4([1, 2, 4, 4], 8))
console.timeEnd('s')