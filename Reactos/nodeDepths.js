// Write a function that takes in a Binary Tree and returns the sum of its nodes' depths

// Each Binary Tree node has a value, left, and right.

// TIME COMPLEXITY: O(n)
function nodeDepths(root) {
  // this is a breadth first search basically
  // initialize variable to keep track of sum of depths
  let totalDepths = 0;
  // intialize stack with a new variable to keep track of node's depth
  let stack = [{ node: root, depth: 0 }];
  // while stack has length
  while (stack.length > 0) {
    // pop off the last element and grab its node and depth
    let currentNode = stack.pop();
    // add depth to totalDepth
    totalDepths += currentNode.depth;
    // push node's left and right and add one to its depth
    if (currentNode.node.left) {
      stack.push({ node: currentNode.node.left, depth: currentNode.depth + 1 });
    }
    if (currentNode.node.right) {
      stack.push({
        node: currentNode.node.right,
        depth: currentNode.depth + 1,
      });
    }
  }
  // return the sum of depths
  return totalDepths;
}
