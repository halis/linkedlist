# linkedlist
A no dependency implementation of a linked list in JavaScript.

```javascript
var list = new LinkedList([1,2,3]);
list.print(); // 1 -> 2 -> 3

console.log(list.addFirst(4)); // Node {value: 4, next: Node, previous: null}
console.log(list.addLast(4)); // Node {value: 4, next: null, previous: Node}
list.print(); // 4 -> 1 -> 2 -> 3 -> 4

console.log(list.addBefore(42, 0)); // Node {value: 42, next: Node, previous: null}

list.print(); // 42 -> 4 -> 1 -> 2 -> 3 -> 4

console.log(list.first); // Node {value: 42, next: Node, previous: null}
console.log(list.first.next); // Node {value: 4, next: Node, previous: Node}

console.log(list.addAfter(43, 0)); // Node {value: 43, next: Node, previous: Node}
list.print(); // 42 -> 43 -> 4 -> 1 -> 2 -> 3 -> 4

console.log(list.addLast(42)); // Node {value: 42, next: null, previous: Node}
list.print(); // 42 -> 43 -> 4 -> 1 -> 2 -> 3 -> 4 -> 42

console.log(list.atIndex(2)); // Node {value: 4, next: Node, previous: Node}
console.log(list.findFirst(42)); // Node {value: 42, next: Node, previous: null}
console.log(list.findLast(42)); // Node {value: 42, next: null, previous: Node}
console.log(list.findAll(42)); // [Node, Node]

console.log(list.last); // Node {value: 42, next: null, previous: Node}

console.log(list.length); // 8

console.log(list.toArray()); // [Node, Node, Node, Node, Node, Node, Node, Node]

list.print(); // 42 -> 43 -> 4 -> 1 -> 2 -> 3 -> 4 -> 42
console.log(list.removeAt(0)); // Node {value: 42, next: Node, previous: null}
list.print(); // 43 -> 4 -> 1 -> 2 -> 3 -> 4 -> 42

console.log(list.removeFirst()); // Node {value: 43, next: Node, previous: null}
console.log(list.removeLast()); // Node {value: 4, next: Node, previous: null}
list.print(); // 4 -> 1 -> 2 -> 3 -> 4

console.log(list.removeNode(list.atIndex(1))); // true
list.print(); // 4 -> 2 -> 3 -> 4

console.log(list.clear()); // LinkedList {first: null, last: null, length: 0}
```
