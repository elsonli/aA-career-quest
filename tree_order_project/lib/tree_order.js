const inOrderArray = root => {
  if (!root) return [];
  const recurseLeft = inOrderArray(root.left);
  const recurseRight = inOrderArray(root.right);
  return [ ...recurseLeft, root.val, ...recurseRight ];
}

const postOrderArray = root => {
  if (!root) return [];
  const recurseLeft = postOrderArray(root.left);
  const recurseRight = postOrderArray(root.right);
  return [ ...recurseLeft, ...recurseRight, root.val ];
}

module.exports = {
  inOrderArray,
  postOrderArray
};