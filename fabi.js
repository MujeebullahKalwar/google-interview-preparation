function fibList(n) {
  if (n == 0) return [0];
  if (n == 1) return [0, 1];
  const arr = fibList(n - 1);
  return [...arr, arr[n - 1] + arr[n - 2]];
}

function fib(n, memo = {}) {
  if(n in memo) return memo[n];
  if (n === 0) return 0;
  if (n === 1) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo); 
  return memo[n];
}

function fib2(n) {
  const arr = Array(n).fill(0);
  arr[1] = 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 2] + arr[i - 1];
  }
  return arr;
}

function fib3(n) {
  const table = Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 0; i < n; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  return table;
}

console.log(fib(6));
console.log(fib(10));
console.log(fib(300));


// console.log(fib3(6));
// console.log(fibList(15));
