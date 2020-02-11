const depthFirstSearch = (root, targetVal) => {
  if (!root) return null;
  if (root.val === targetVal) return root;
  const recurseLeft = depthFirstSearch(root.left, targetVal);
  const recurseRight = recurseLeft || depthFirstSearch(root.right, targetVal);
  return recurseRight;
}

module.exports = {
  depthFirstSearch
};