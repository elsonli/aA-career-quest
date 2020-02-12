const numRegions = graph => {
  let numComponents = 0;
  let visited = new Set();
  const nodes = Object.keys(graph);
  nodes.forEach(node => {
    let neighbors = graph[node];
    if (neighbors.every(neighbor => !visited.has(neighbor))) {
      numComponents += 1;
    }
    visited.add(node);
  });
  return numComponents;
}

module.exports = {
  numRegions
};