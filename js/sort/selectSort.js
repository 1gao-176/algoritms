Array.prototype.selectSort = function () {
  for (let i = 0; i < this.length; i++) {
    let minIndex = i;
    for (let j = i; j < this.length; j++) {
      if (this[j] < this[minIndex]) {
        minIndex = j;
      }
    }
    const temp = this[minIndex];
    this[minIndex] = this[i];
    this[i] = temp;
  }
};

const arr = [5, 4, 3, 2, 1];
arr.selectSort();
console.log(arr);
