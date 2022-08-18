function getMissingPositiveInteger__OLD(numbers) {
  numbers = numbers.sort();
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] + 1 != numbers[i + 1]) {
      if (numbers[i] + 1 != 0) return numbers[i] + 1;
    }
  }
}
// O(nlogn)
// O(1)

function getMissingPositiveInteger(numbers) {
  const numMap = {};
  numbers.forEach((el) => (numMap[el] = true));
  for (let i = 0; i < numbers.length; i++) {
    const extraNum = numbers[i]++;
    if(!numMap[extraNum]) {
        return remainder;
    }
  }
  return null;
}

console.log(getMissingPositiveInteger([3, 4, -1, 1])); // 2
console.log(getMissingPositiveInteger([1, 2, 0])); // 3
