// View the full problem and run the test cases at:
//  https://leetcode.com/problems/kth-largest-element-in-an-array/

const { MaxHeap } = require("../lib/max_heap");

const findKthLargest = (nums, k) => {
  let heap = new MaxHeap();
  for (let idx = 0; idx < nums.length; idx++) heap.insert(nums[idx]);
  for (let idx = 1; idx < k; idx++) heap.deleteMax();
  return heap.array[1]; 
}