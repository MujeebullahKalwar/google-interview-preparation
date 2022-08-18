function volumnOfLake(height) {
    let total = 0;
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                total += (leftMax - height[left]);
            }
            ++left;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right]
            } else {
                total += (rightMax - height[right]);
            }
            --right;
        }
    }
    return total;
}
// O(n)
// O(1)

console.log(volumnOfLake([4, 2, 0, 3, 2, 5])) // 9
console.log(volumnOfLake([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6
console.log(volumnOfLake([1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 2])) // 15