Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        const temp = this[j + 1];
        this[j + 1] = this[j];
        this[j] = temp;
      }
    }
  }
};

[5, 4, 3, 2, 1].bubbleSort();
