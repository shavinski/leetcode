/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
    if (!root) return [];

    const queue = [];
    const values = [];

    queue.push(root);

    while (queue.length > 0) {
        let value = [];
        let length = queue.length;

        for (let i = 0; i < length; i++) {
            let node = queue.shift();   // 3
            value.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        values.push(value);
    }

    return values;
};