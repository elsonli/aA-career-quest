const treeSum = root => {
  if (!root) return 0;
  const recurseLeft = treeSum(root.left);
  const recurseRight = treeSum(root.right);
  return root.val + recurseLeft + recurseRight;
}

module.exports = {
  treeSum
};