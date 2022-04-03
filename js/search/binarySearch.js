Array.prototype.binarySearch = function (item) {
  let low = 0;
  let high = this.length - 1;

  while (low <= high) {
    let mid = Math.floor((high + low) / 2);
    if (item < this[mid]) {
      high = mid - 1;
    } else if (item > this[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

const result = [1, 2, 3, 4, 5].binarySearch(4);
console.log(result);
console.log(result);
