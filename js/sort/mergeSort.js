Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid, arr.length);

    const orderLeft = rec(leftArr);
    const orderRight = rec(rightArr);
    const result = [];
    while (orderLeft.length || orderRight.length) {
      if (orderLeft.length && orderRight.length) {
        orderLeft[0] > orderRight[0]
          ? result.push(orderRight.shift())
          : result.push(orderLeft.shift());
      } else if (orderLeft.length) {
        result.push(orderLeft.shift());
      } else if (orderRight.length) {
        result.push(orderRight.shift());
      }
    }
    return result;
  };
  const result = rec(this);
  result.forEach((item, index) => {
    this[index] = item;
  });
};

const arr = [5, 4, 3, 2, 1];
arr.mergeSort();
console.log(arr);
