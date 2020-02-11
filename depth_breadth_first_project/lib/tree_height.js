const treeHeight = root => {
  if (!root) return -1;
  const recurseLeft = 1 + treeHeight(root.left);
  const recurseRight = 1 + treeHeight(root.right);
  return Math.max(recurseLeft, recurseRight);
}

module.exports = {
  treeHeight
};