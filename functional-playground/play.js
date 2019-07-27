import forEach from '../lib/es6-functional.js'

var array = [1, 2, 3]
//print the console
forEach(array, (data, index) => console.log(index, data))
//double the contents
forEach(array, (data) => console.log(2 * data))

// 只打印值为3的元素和位置
// JS中函数式一等公民

// 抽象的套路1: 把函数作为参数传入

forEach(array, (data, index) => {
  if (data === 3) {
    console.log(`${index}: ${data}`)
  }
})
