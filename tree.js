class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  create(val, side) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    const addSide = (side) => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      }
      current = current[side];
    };

    while (true) {
      if (val === current.val) return this;

      if(!!side) {
        addSide(side);
      } else {
        if (val > current.val) addSide("left");
        else addSide("right");
      }
    }
  }
}

const tree = new BST();
tree.create(10);
tree.create(20, 'left');
tree.create(30, 'right');
tree.create(40, 'left');
tree.create(60, 'right');

// tree.create(20);
// tree.create(14);
// tree.create(57);
// tree.create(9);
// tree.create(19);
// tree.create(31);
// tree.create(62);
// tree.create(3);
// tree.create(11);

// function BFS() {
//   let visited = [],
//     queue = [],
//     current = this.root;

//   queue.push(current);
//   while (queue.length) {
//     current = queue.shift();
//     visited.push(current.val);

//     if (current.left) queue.push(current.left);
//     if (current.right) queue.push(current.right);
//   }

//   return visited;
// }

// console.log(tree.BFS()); //[ 20, 14, 57, 9, 19, 31, 62, 3, 11, 72 ]

function serialize(root) {
  if (root) {
    let str = "";
    if (root.left) {
      str += " " + serialize(root.left);
    }
    if (root.right) {
      str += " " + serialize(root.right);
    }
    return (str + " " + root.val).trim();
  }
  return "";
}

console.log(serialize(tree.root));
