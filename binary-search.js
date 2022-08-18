function binarySearch(target, array) {
  // let start = 0;
  // let end = arr.length - 1;
  // while (start <= end) {
  //   let mid = Math.floor((start + end) / 2);
  //   if (arr[mid] === x) return true;
  //   else if (arr[mid] < x) start = mid + 1;
  //   else end = mid - 1;
  // }
  // return false;

  while (array.length !== 0) {
    let mid = Math.floor(array.length / 2);
    if (target === array[mid]) {
      return true;
    } else if (target > array[mid]) {
      array = array.slice(mid + 1);
    } else if (target < array[mid]) {
      array.length = mid;
    }
  }
  return false;
}

// Time Complexity: O(logN)
// Auxiliary Space: O(1)

// console.log(binarySearch(20, [1, 25, 8, 9, 18, 20]));

function binarySearchRecursive(target, array, start = 0, end = array.length) {
  if (array.length === 0) return false;
  if (start > end) return false;
  if (array[start] === target) return true;

  let mid = Math.floor((start + end) / 2);
  if (array[mid] === target) return true;
  if (target > array[mid]) {
    return binarySearchRecursive(target, array, mid + 1, end);
  } else {
    return binarySearchRecursive(target, array, start, mid - 1);
  }
}

// Time Complexity: O(logN)
// Auxiliary Space: O(1)

// console.log(binarySearchRecursive(210, [1, 25, 8, 9, 18, 20]));

function BS(target, numbers) {
  let low = 0;
  let high = numbers.length;
  while(low <=  high) {
    let mid = low + Math.floor(( high - low) / 2);
    if(numbers[mid] === target) return mid;

    if(target > numbers[mid]) low = mid + 1;
    else high = mid - 1;
  }

  return false;
}

console.log(BS(20, [1, 25, 8, 9, 18, 20]));
