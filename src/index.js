
// // You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix){
    let res = []
    for (i in matrix){
      i % 2 === 0 ? res.push(matrix[i]) :
                    res.push(matrix[i].reverse())
    }
    return res.flat()
  }
  return []
}
