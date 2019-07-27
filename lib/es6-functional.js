const forEach = (array, fn) => {
   // 命令式的讨论问题
   for (let i = 0; i < array.length; i++) {
      // 函数式的抽象封装
      fn(array[i], i, array)  // 模仿Array.prototype.forEach
   }
}

export default forEach
