// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

const getHeight = root => {
  if (!root) return 0;
  const leftHeight = 1 + getHeight(root.left);
  const rightHeight = 1 + getHeight(root.right);
  return Math.max(leftHeight, rightHeight);
}

const isBalanced = root => {
  if (!root) return true;
  if (!root.left && !root.right) return true;
  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1
  );
}