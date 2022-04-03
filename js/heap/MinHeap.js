class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(index) {
    return (index - 1) >> 1;
  }

  getLeftIndex(index) {
    return 2 * index + 1;
  }

  getRightIndex(index) {
    return 2 * index + 2;
  }

  swap(parentIndex, index) {
    const temp = this.heap[parentIndex];
    this.heap[parentIndex] = this.heap[index];
    this.heap[index] = temp;
  }

  shiftUp(index) {
    if (index === 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    if (index === this.heap.length - 1) {
      return;
    }
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(index, leftIndex);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(index, rightIndex);
      this.shiftDown(rightIndex);
    }
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

const h = new MinHeap();
insertValue(5);
function insertValue(num) {
  for (let i = 0; i < num; i++) {
    h.insert((Math.random() * 100) >> 0);
  }
}

h.pop();
console.log(h);
