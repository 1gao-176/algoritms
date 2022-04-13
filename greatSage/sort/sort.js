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
            if (array[i] > flag) right.push(array[i])
            else left.push(array[i])
        }
        return quickSort(left).concat(flag).concat(quickSort(right))
    }
    // console.log('快速排序', quickSort(array));

const binarySearch = (array, value) => {
        let hi = array.length - 1;
        let lo = 0
        while (hi >= lo) {
            let mid = Math.floor((hi + lo) / 2)
            if (value > array[mid]) {
                lo = mid + 1
            } else if (value < array[mid]) {
                hi = mid - 1
            } else {
                return mid
            }
        }
        return -1
    }
    // console.log(binarySearch(quickSort(array), 23));

const quick = (array, start, end) => {
    let init = start
    let flag = array[init]
    start++
    while (start < end) {
        while (array[start] < flag) {
            start++
        }
        while (array[end] > flag) {
            end--
        }
        if (start < end) {
            [array[start], array[end]] = [array[end], array[start]]
            start++
            end--
        }
    }
    [array[init], array[start - 1]] = [array[start - 1], array[init]]
    return start
}


const quick1Sort = (array, start, end) => {
    if (start < end) {
        let index = quick(array, start, end)
        quick1Sort(array, start, index - 1)
        quick1Sort(array, index + 1, end)
    }
    return array
}
console.log(quick1Sort(array, 0, array.length - 1))