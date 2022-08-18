function mergeSorted(lists) {
  const result = [];
  for (let i = 0; i < lists.length; i++) {
    result.push(...lists[i]);
  }
  return result.sort(); // quicksort O(nlogn)
}
// O(K*N*logkN)
// O(knlogkn)


console.log(mergeSorted([[10, 15, 30], [12, 15, 20], [17, 20, 32]])); // [10, 12, 15, 15, 17, 20, 20, 30, 32]