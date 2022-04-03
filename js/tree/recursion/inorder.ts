/**
 * 中序遍历
 * 对根节点的左子树进行中序遍历
 * 访问跟节点
 * 对根节点的右子树进行中序遍历
 */

const inOrderTree = require("../binaryTree");

const inOrder = (root: any) => {
  // if (!root) {
  //     return

  // }
  // inOrder(root.left)
  // console.log(root.val);
  // inOrder(root.right)

  // if (!root) {
  //   return;
  // }
  // const stack = [];
  // let p:any = root;
  // while (stack.length || p) {
  //   while (p) {
  //     stack.push(p);

  //     p = p.left;
  //   }
  //   p = stack.pop();
  //   console.log(p.val);
  //   p = p.right;
  // }

  if (!root) {
    return;
  }
  const stack = [];
  let p: any = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    p = stack.pop();
    console.log(p.val);
    p = p.right;
  }
};
inOrder(inOrderTree);
