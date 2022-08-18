console.time('s')

function _travelGrid(m, n) {
    if (m == 0 || n == 0) return 0;
    if (m <= 1 && n == 1) return 1;
    return travelGrid(m - 1, n) + travelGrid(m, n - 1);
}

function travelGrid(m, n, memo = {}) {
    const key = m + 'x' + n;
    if(key in memo) return memo[key];
    if (m == 0 || n == 0) return 0;
    if (m <= 1 && n == 1) return 1;
    memo[key] = travelGrid(m - 1, n, memo) + travelGrid(m, n - 1, memo);
    return memo[key];
}

console.log(travelGrid(100, 100));
console.timeEnd('s')