const graph2 = require("./graph");

const graphBfs = (n) => {
  if (!graph2[n]) {
    return;
  }
  const visited = new Set();
  const q = [n];
  visited.add(n);
  while (q.length) {
    const first = q.shift();
    console.log(first);
    graph2[first].forEach((element) => {
      if (!visited.has(element)) {
        q.push(element);
        visited.add(element);
      }
    });
  }
};
graphBfs(2);
