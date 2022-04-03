Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if (arr.length <= 1) {
      return arr;
    }
    const left = [];
    const right = [];
    const mid = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };
  const result = rec(this);
  result.forEach((item, index) => {
    this[index] = item;
  });
};

const arr = [5, 4, 3, 2, 1];
arr.quickSort();
console.log(arr);
