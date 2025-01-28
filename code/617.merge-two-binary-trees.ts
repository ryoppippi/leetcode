class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @leet start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null,
): TreeNode | null {
  if (root1 == null && root2 == null) return null; // if both the roots are null, return null
  if (root1 == null || root2 == null) return root1 ?? root2; // if either of the root is null, return the other root

  root1.val += root2.val; // merge the values of the roots

  root1.left = mergeTrees(root1.left, root2.left); // recursively merge the left subtrees
  root1.right = mergeTrees(root1.right, root2.right); // recursively merge the right subtrees

  return root1; // return the merged tree
}
// @leet end

