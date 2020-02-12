const breadthFirstSearch = (startingNode, targetVal) => {
  let visited = new Set();
  let queue = [startingNode];
  while (queue.length) {
    let shiftedNode = queue.shift();
    shiftedNode.neighbors.forEach(neighbor => {
      if (!visited.has(neighbor)) queue.push(neighbor);
    });
    if (shiftedNode.val === targetVal) return shiftedNode;
    visited.add(shiftedNode);
  }
  return null;
}

module.exports = {
  breadthFirstSearch
};