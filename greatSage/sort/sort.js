let array = require('./arr.js')


const bubbleSort = (array) => {
    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length - j; i++) {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
            }
        }
    }
    return array
}

// console.log('冒泡排序', bubbleSort(array));
const quickSort = (array) => {
        if (array.length < 2) return array
        let flag = array[0]
        let left = []
        let right = []
        for (let i = 1; i < array.length; i++) {
            if (flag > array[i]) {
                left.push(array[i])
            } else {
                right.push(array[i])
            }
        }
        return quickSort(left).concat(flag, quickSort(right))
    }
    // console.log('快速排序', quickSort(array));

const binarySearch = (array, value) => {
    let hi = array.length - 1;
    let lo = 0
    return rank(array, value, hi, lo)
}

const rank = (array, value, hi, lo) => {
    let mid = Math.floor((hi + lo) / 2)
    if (hi < lo) return -1
    if (value > array[mid]) {
        return rank(array, value, hi, mid + 1)
    } else if (value < array[mid]) {
        return rank(array, value, mid - 1, lo)
    }
    if (value == array[mid]) {
        return mid
    }
}

console.log('二分查找', binarySearch(quickSort(array), 1325864));