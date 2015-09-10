# linkedlist
A no dependency implementation of a linked list in JavaScript.

```javascript
var list = new LinkedList([1,2,3]);
list.print(); // 1 -> 2 -> 3

console.log('Added: ', list.addFirst(4)); // Added: Node {value: 4, next: Node, previous: null}
console.log('Added: ', list.addLast(4)); // Added: Node {value: 4, next: null, previous: Node}
list.print(); // 4 -> 1 -> 2 -> 3 -> 4

console.log('Added: ', list.addBefore(42, 0)); // Added: Node {value: 42, next: Node, previous: null}

list.print(); // 42 -> 4 -> 1 -> 2 -> 3 -> 4

console.log('First: ', list.first); // First: Node {value: 42, next: Node, previous: null}
console.log('Next: ', list.first.next); // Next: Node {value: 4, next: Node, previous: Node}
console.log('Previous: ', list.last.previous); // Previous: Node {value: 3, next: Node, previous: Node}

console.log('Added: ', list.addAfter(43, 0)); // Added: Node {value: 43, next: Node, previous: Node}
list.print(); // 42 -> 43 -> 4 -> 1 -> 2 -> 3 -> 4

console.log('Added: ', list.addLast(42)); // Added: Node {value: 42, next: null, previous: Node}
list.print(); // 42 -> 43 -> 4 -> 1 -> 2 -> 3 -> 4 -> 42

console.log('Index 2: ', list.atIndex(2)); // Index 2: Node {value: 4, next: Node, previous: Node}
console.log('Find First: ', list.findFirst(42)); // Find First: Node {value: 42, next: Node, previous: null}
console.log('Find Last: ', list.findLast(42)); // Find Last: Node {value: 42, next: null, previous: Node}
console.log('Find All: ', list.findAll(42)); // Find All: [Node, Node]

console.log('Last: ', list.last); // Last: Node {value: 42, next: null, previous: Node}

console.log('Length: ', list.length); // Length: 8

console.log('To Array: ', list.toArray()); // To Array: [Node, Node, Node, Node, Node, Node, Node, Node]

list.print(); // 42 -> 43 -> 4 -> 1 -> 2 -> 3 -> 4 -> 42
console.log('Remove At: ', list.removeAt(0)); // Remove At: Node {value: 42, next: Node, previous: null}
list.print(); // 43 -> 4 -> 1 -> 2 -> 3 -> 4 -> 42

console.log('Remove First: ', list.removeFirst()); // Remove First: Node {value: 43, next: Node, previous: null}
console.log('Remove Last: ', list.removeLast()); // Remove Last: Node {value: 4, next: Node, previous: null}
list.print(); // 4 -> 1 -> 2 -> 3 -> 4

console.log('Remove Node: ', list.removeNode(list.atIndex(1))); // Remove Node: true
list.print(); // 4 -> 2 -> 3 -> 4

console.log('Clear: ', list.clear()); // Clear: LinkedList {first: null, last: null, length: 0}
```
