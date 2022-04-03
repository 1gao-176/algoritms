const tree1 = {
  val: "a",
  children: [
    {
      val: "b",
      children: [
        {
          val: "d",
          children: [],
        },
        {
          val: "e",
          children: [],
        },
      ],
    },
    {
      val: "c",
      children: [
        {
          val: "f",
          children: [],
        },
        {
          val: "g",
          children: [],
        },
      ],
    },
  ],
};


const bfs=(root)=>{
    let p=[root];
    while(p.length){
        let first=p.shift();
        console.log(first.val);
        first.children.forEach((child)=>{
            p.push(child)
        })
        
    }
}
bfs(tree1)