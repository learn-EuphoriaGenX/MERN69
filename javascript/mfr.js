// map + filter + reduce

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newNums = nums.map(n => n * n)
let newNumsGt5 = nums.filter(n => n > 5)
let totalSum = nums.reduce((a, b) => a + b, 0)


let j = ["Hello", "my", "name", "is", "campa"]
let string = j.reduce((a, b) => `${a} ${b}`, "😅")
console.log(string);



