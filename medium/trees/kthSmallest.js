function kthSmallest(root, k) {
    const inorderArray = [];
    traverse(root);
    console.log(inorderArray, k);
    return inorderArray[k - 1];

    function traverse(root) {
        if (!root) return;

        traverse(root.left);
        inorderArray.push(root.val);
        traverse(root.right);
    }
};