// Brute force solution - itterative
function canSum_1(targetSum, numbers) {
  for (const num1 of numbers) {
    for (const num2 of numbers) {
      if (num1 + num2 === targetSum) {
        return true;
      }
    }
  }
  return false;
}
// O(n^2) time
// O(1) space

// Brute Force - Recursion
function canSum_2(targetSum, numbers) {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (const num of numbers) {
    const remainder = targetSum - num;
    if (canSum_2(remainder, numbers)) {
      return true;
    }
  }
  return false;
}
// O(n) time
// O(1) space

// Optimized - Recursion
function canSum_3(targetSum, numbers, memo = {}) {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (const num of numbers) {
    const remainder = targetSum - num; // compliment
    if (canSum_3(remainder, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
}

// O(n) time
// O(n) time

// console.log("canSum_1", canSum_1(5, [1, 2, 3, 4]));
// console.log("canSum_1", canSum_1(13, [2]));

// console.log("canSum_2", canSum_2(5, [1, 2, 3, 4]));
// console.log("canSum_2", canSum_2(13, [2]));
// console.log("canSum_2", canSum_2(133, [2]));

// console.log("canSum_3", canSum_3(5, [1, 2, 3, 4]));
// console.log("canSum_3", canSum_3(13, [2]));
// console.log("canSum_3", canSum_3(13, [2]));

function howSum_1(targetSum, numbers) {
  const canSumList = [];
  for (const num1 of numbers) {
    for (const num2 of numbers) {
      if (num1 + num2 === targetSum) {
        canSumList.push([num1, num2]);
      }
    }
  }
  return canSumList;
}
// O(n^2) time
// O(n) space

function howSum_2(targetSum, numbers, memo = {}) {
  if(targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (const num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum_2(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetSum] = [num, ...remainderResult];
      return memo[targetSum]
    }
  }
  memo[targetSum] = null;
  return null;
}

console.log("howSum_1", howSum_1(5, [2, 3, 4]));
console.log("howSum_2", howSum_2(5, [2, 3, 4]));
