
var distributeCandies = function (candyType) {
    const set = new Set();
    candyType.map(e => set.add(e));
    const maxTotal = candyType.length / 2;
    return maxTotal > set.size ? set.size : maxTotal;
};