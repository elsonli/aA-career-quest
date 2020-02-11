// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

const sortedArrayToBST = nums => {
  if (!nums.length) return null;
  const middleIdx = Math.floor(nums.length / 2);
  const newRoot = new TreeNode(nums[middleIdx]);
  newRoot.left = sortedArrayToBST(nums.slice(0, middleIdx));
  newRoot.right = sortedArrayToBST(nums.slice(middleIdx + 1));
  return newRoot;
};