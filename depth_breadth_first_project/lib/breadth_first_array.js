const breadthFirstArray = root => {
  let queue = [root];
  let resultArray = [];
  while (queue.length) {
    let currNode = queue.shift();
    resultArray.push(currNode.val);
    if (currNode.left) queue.push(currNode.left);
    if (currNode.right) queue.push(currNode.right);
  }
  return resultArray;
}

module.exports = {
  breadthFirstArray
};