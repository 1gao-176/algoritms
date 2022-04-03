const graph1 = require("./graph");

const visited =new Set();
const dfs1=(g)=>{
  if(!g)return
  const stack=[g]

  const visited =new Set();
  visited.add(g);
  while (stack.length) {
    const last = stack.pop();
    console.log(last);
    graph1[last].forEach(element=>{
      if(!visited.has(element)){
        stack.push(element);
        visited.add(element);
      }

    })
    
  }
}

dfs1(2);
