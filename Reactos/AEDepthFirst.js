// Given a Node class that has a name and an array of optional children nodes, implement the depthFirstSearch method on the Node class, which takes an empty array, traverses the tree using the Depth-first Search approach, stores all of the nodes' names in the input array, and returns it.

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    this.children.forEach((node) => node.depthFirstSearch(array));
    return array;
  }
}
