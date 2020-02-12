const maxValue = (startingNode, visited=new Set()) => {
  let max = -Infinity;
  let queue = [startingNode];
  while (queue.length) {
    let shiftedNode = queue.shift();
    shiftedNode.neighbors.forEach(neighbor => {
      if (!visited.has(neighbor)) queue.push(neighbor);
    });
    if (shiftedNode.val > max) max = shiftedNode.val;
    visited.add(shiftedNode);
  }
  return max;
}

module.exports = {
  maxValue
};