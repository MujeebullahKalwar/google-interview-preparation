function productOfNumbers_brute_force(numbers) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    let product = 1; // product:1, i:0 number[i]:1
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        product *= numbers[j];
      }
    }
    result.push(product);
  }
  return result;
}
// O(n^2) time
// O(n) space

function productOfNumbers_OLD(numbers) {
  const multiplyExceptIndex = (numbers, ignoreIndex) => {
    let total = 1;
    numbers.map((num, index) => (total *= ignoreIndex == index ? 1 : num));
    return total;
  };

  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(multiplyExceptIndex(numbers, i));
  }
  return result;
}



function productOfNumbers(numbers) {
  let totalProduct = 1;
  numbers.map((num) => (totalProduct *= num));

  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    const remainder = totalProduct / numbers[i];
    result.push(remainder);
  }
  return result;
}

// O(n + n) => O(2n) => O(n)
// O(n)

console.log(productOfNumbers([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(productOfNumbers([3, 2, 1])); // [2, 3, 6]


