function mergeSort(list) {
  if (list.length <= 1) return list;

  const { left_half, right_half } = split(list);
  const left = mergeSort(left_half);
  const right = mergeSort(right_half);

  return merge(left, right);
}

function split(list) {
  const mid = Math.floor(list.length / 2);
  return {
    left_half: list.slice(0, mid),
    right_half: list.slice(mid),
  };
}

function merge(left, right) {
  const newList = [];
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      newList.push(left[i]);
      i++;
    } else {
      newList.push(right[j]);
      j++
    }
  }
  while (i < left.length) {
    newList.push(left[i]);
    i++;
  }
  while (j < right.length) {
    newList.push(right[j]);
    j++;
  }
  return newList;
}

console.log(mergeSort([1, 9, 3, 0, 1, 6]));
