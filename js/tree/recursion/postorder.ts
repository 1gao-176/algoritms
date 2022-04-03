/**
 * 对根节点的左子树进行后序遍历
 * 对根节点的右子树进行后序遍历
 * 访问根节点
 */
interface BinaryTree {
  val: number;
  left: any;
  right: any;
}
const postorderTree: BinaryTree = require("../binaryTree");

const postorder = (root:BinaryTree) => {
  if (!root) {
    return;
  }
   postorder(root.left)
   postorder(root.right)
   console.log(root.val);
  // const stack = [root];
  // const reverseStack = [];
  // while (stack.length) {
  //   let node: any = stack.pop();
  //   reverseStack.push(node);
  //   if (node.left) {
  //     stack.push(node.left);
  //   }
  //   if (node.right) {
  //     stack.push(node.right);
  //   }
  // }
  // while (reverseStack.length) {
  //   let reverseNode: any = reverseStack.pop();
  //   console.log(reverseNode.val);
  // }
};

postorder(postorderTree);
