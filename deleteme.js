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

function depthFirstPostOrder(node, cb) {
  node.children.forEach((child) => depthFirstPostOrder(child, cb));
  cb(node);
}

const callback = (node) => {
  console.log(node.value);
};

depthFirstPostOrder(a, callback);
