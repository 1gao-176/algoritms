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

let quick = (array, start, end) => {
    let flag = start;
    start = start + 1
    while (start <= end) {
        while (array[start] < array[flag]) {
            start++
        }
        while (array[end] > array[flag]) {
            end--
        }
        if (start < end) {
            [array[start], array[end]] = [array[end], array[start]]
            end--
            start++
        }
    }
    [array[start - 1], array[flag]] = [array[flag], array[start - 1]]
    return start
}


let quickSort1 = (array, start, end) => {
    if (start < end) {
        let index = quick(array, start, end)
        quickSort1(array, start, index - 1)
        quickSort1(array, index + 1, end)
    }

    return array
}
console.log(quickSort1(array, 0, array.length - 1));