Array.prototype.insertionSort = function () {
  for (let i = 1; i < this.length; i++) {
    let temp = this[i];
    let j;
    for (j = i; j > 0; j--) {
      if (this[j - 1] > temp) {
        this[j] = this[j - 1];
      } else {
        break;
      }
    }

    this[j] = temp;
  }
};

const arr = [5, 4, 3, 2, 1];
arr.insertionSort();

console.log(arr);
