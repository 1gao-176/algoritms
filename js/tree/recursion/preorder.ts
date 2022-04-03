/**
 * 先序遍历
 * 访问根节点
 * 对根节点的左子树进行先序遍历
 * 对根节点的右子树进行先序遍历
 */
interface BinaryTree {
  val: number;
  left: any;
  right: any;
}
const preBt: BinaryTree = require("../binaryTree");

const preOrder = (root: BinaryTree) => {
  if (!root) {
    return;
  }
  // console.log(root.val);
  // preOrder(root.left);

  // preOrder(root.right);


  // while (stack.length){
  //   let node:any = stack.pop();
  //   console.log(node.val);
  //   if(node.right) stack.push(node.right);
  //   if(node.left) stack.push(node.left);
  // }


};
preOrder(preBt);
