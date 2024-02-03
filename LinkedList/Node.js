class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  getNextNode() {
    return this.next;
  }

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("Node must be a member of the Node class.");
    }
  }
}

const firstNode = new Node("Node!");
const secondNode = new Node("Next Node!");

firstNode.setNextNode(secondNode);
console.log(firstNode.getNextNode());

module.exports = Node;
