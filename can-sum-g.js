function canSum(target, list, memo = {}) {
	// handle base cases
	if (target in memo) return memo[target];
	if (target === 0) return true;
	if (target < 0) return false;
	
	for (const num of list) {
		const remainder = target - num;
		memo[target] = canSum(remainder, list)
		if (memo[target] === true) {
			return true;
}
	}
	memo[target] = false;
	return false;
}

console.log(canSum(5, [50, 2, 4, 1]));
console.log(canSum(300, [7, 14]));