
function LinkedList(values) {
	this.first = null;
	this.last = null;
	this.length = 0;

	this.atIndex = function(index) {
		var ctr = 0, ptr;
		if (index < 0 || index >= this.length) throw 'out of bounds';

		ptr = this.first;
		while (ctr !== index) {
			ptr = ptr.next;
			ctr++;
		}

		return ptr;
	};

	this.findFirst = function(value) {
		var ptr;
		if (this.first == null) return null;

		ptr = this.first;
		while (ptr) {
			if (ptr.value === value) return ptr;
			ptr = ptr.next;
		}

		return null;
	};

	this.findLast = function(value) {
		var ptr;
		if (this.first == null) return null;

		ptr = this.last;
		while (ptr) {
			if (ptr.value === value) return ptr;
			ptr = ptr.previous;
		}

		return null;
	};

	this.findAll = function(value) {
		var ptr, result = [];
		if (this.first == null) return result;

		ptr = this.first;
		while (ptr) {
			if (ptr.value === value) result.push(ptr);
			ptr = ptr.next;
		}

		return result;
	};

	this.clear = function() {
		this.first = null;
		this.last = null;
		this.length = 0;

		return this;
	};

	this.toArray = function() {
		var ptr, result = [];
		if (this.first == null) return result;

		ptr = this.first;
		while (ptr) {
			result.push(ptr);
			ptr = ptr.next;
		}

		return result;
	};

	this.addLast = function(value) {
		var newNode;

		if (this.first == null) {
			newNode = createNode(value);
			this.first = newNode;
			this.last = this.first;
		} else {
			newNode = createNode(value, null, this.last);
			this.last.next = newNode;
			this.last = newNode;
		}

		this.length++;
		return newNode;
	};

	this.addFirst = function(value) {
		var newNode;

		if (this.first == null) {
			newNode = createNode(value);
			this.first = newNode;
			this.last = this.first;
		} else {
			newNode = createNode(value, this.first);
			this.first.previous = newNode;
			this.first = newNode;
		}

		this.length++;
		return newNode;
	};

	this.addAfter = function(value, index) {
		var ctr = 0, ptr, newNode;
		if (index < 0 || index >= this.length) throw 'out of bounds';

		ptr = this.first;
		while (ctr !== index) {
			ptr = ptr.next;
			ctr++;
		}

		newNode = createNode(value, ptr.next, ptr);
		if (index === this.length - 1) {
			this.last = newNode;
		}
		
		ptr.next = newNode;
		this.length++;

		return newNode;
	};

	this.addBefore = function(value, index) {
		var ctr = 0, ptr;
		if (index < 0 || index >= this.length) throw 'out of bounds';

		ptr = this.first;
		while (ctr !== index) {
			ptr = ptr.next;
			ctr++;
		}

		newNode = createNode(value, ptr, ptr.previous);
		if (index === 0) {
			this.first = newNode;
		}
		
		ptr.previous = newNode;
		this.length++;

		return newNode;
	};

	this.print = function() {
		var ptr = this.first;
		var result = '';
		var ctr = 0;

		while (ptr != null) {
			if (ctr > 0) result += ' -> ';
			result += ptr.value;
			ptr = ptr.next;
			ctr++;
		}

		console.log(result);
	};

	this.removeFirst = function() {
		var result = this.first;
		if (this.first == null) return;
		this.first.next.previous = null;
		this.first = this.first.next;
		this.length--;

		return result;
	};

	this.removeLast = function() {
		var result = this.last;
		if (this.first == null) return;
		this.last.previous.next = null;
		this.last = this.last.previous;
		this.length--;

		return result;
	};

	this.removeAt = function(index) {
		var ctr = 0, ptr, result;
		if (this.first == null) return;
		if (index < 0 || index >= this.length) throw 'out of bounds';

		ptr = this.first;
		while (ctr !== index) {
			ptr = ptr.next;
			ctr++;
		}

		result = ptr;

		if (index === 0) {
			this.first = ptr.next;
		} else if (index === this.length -1) {
			this.last = ptr.previous;
		}

		if (ptr.next) {
			ptr.next.previous = ptr.previous;
		}

		if (ptr.previous) {
			ptr.previous.next = ptr.next;
		}
		
		this.length--;

		return ptr;
	};

	this.removeNode = function(node) {
		var ptr = this.first, ctr;

		if (node == null) throw 'not a node';
		if (ptr == null) return false;

		ctr = 0;
		while (ptr) {
			if (ptr === node) {
				this.removeAt.bind(this)(ctr);
				return true;
			}
			ptr = ptr.next;

			ctr++;
		}

		return ptr;
	};

	function createNode(value, next, previous) {
		return new Node(value, next, previous);
	}

	(function init() {
		if (values && values.length) {
			values.forEach(function(value) {
				this.addLast(value);
			}.bind(this));
		}
	}.bind(this)());
}

function Node(value, next, previous) {
	this.value = value;
	this.next = next || null;
	this.previous = previous || null;
}