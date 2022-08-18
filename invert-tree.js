function invertTree(tree) {
    if(!tree) return null;
    [tree.left, tree.right] = [tree.right, tree.left];
    invertTree(tree.left);
    invertTree(tree.right);
    return tree;
}
// O(n) time
// O(1) space