// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');

const buildTree = (preorder, inorder) => {
  if (!preorder.length && !inorder.length) return null;
  const rootVal = preorder.shift();
  const rootValIdx = inorder.indexOf(rootVal);
  const leftVals = inorder.slice(0, rootValIdx);
  const rightVals = inorder.slice(rootValIdx + 1);
  const newRoot = new TreeNode(rootVal);
  newRoot.left = buildTree(preorder.slice(0, rootValIdx), leftVals);
  newRoot.right = buildTree(preorder.slice(rootValIdx), rightVals);
  return newRoot;
}

preorder = [3, 9, 20, 15, 7]
inorder = [9, 3, 15, 20, 7]
console.log(buildTree(preorder, inorder));