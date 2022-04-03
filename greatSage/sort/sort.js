let array = require('./arr.js')

for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length - j; i++) {
        if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
        }
    }

}

console.log('冒泡排序', array);