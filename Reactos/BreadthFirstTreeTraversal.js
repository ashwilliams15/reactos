// Today you will write a series of iterator functions for trees.
// breadthFirst, depthFirstPreOrder, depthFirstPostOrder (if time allows)
// Each of these functions will take a node of the tree and a callback. The function will iterate through the child nodes, calling the callback function on each of them. The difference between them is the order in which they iterate.

// I split this up into three separate files.

function node(value) {
  return {
    value,
    children: [],
  };
}
var a = node("a");
var b = node("b");
var c = node("c");
var d = node("d");
var e = node("e");
var f = node("f");
var g = node("g");
var h = node("h");
var i = node("i");
var j = node("j");
var k = node("k");
var l = node("l");
var m = node("m");

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

//                A
//            /   |    \
//          B     C     D
//         |    / | \   /\
//         E   F  G H  I  J
//        /\        |
//       K L        M

// Time Complexity: O(n)
// Space Complexity: ? Thinking O(1)
function breadthFirst(node, callback) {
  // initialize queue
  let queue = [node];
  // while queue has length
  while (queue.length) {
    const curNode = queue.shift();
    // Run callback on node
    callback(curNode.value);
    // check to see if node has any children
    // if it does, push those children into a queue
    if (curNode.children.length) {
      for (let i = 0; i < curNode.children.length; i++) {
        queue.push(curNode.children[i]);
      }
    }
    // after looking at solution this could also be done
    // queue.push(...curNode.children)
  }
}

breadthFirst(a);
