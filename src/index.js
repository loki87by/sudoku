module.exports = function solveSudoku(matrix) {
  const res = [[], [], [], [], [], [], [], [], []];
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for(let i=0; i<9; i++){
    if(matrix[i].every((i) => {return i !== 0})) {
      res[i] = matrix[i]
    } else {
      for(let j=0; j<9; j++){
        if(matrix[i][j] !== 0) {
          res[i][j] = matrix[i][j]
        } else {
          const emptyNums = nums.slice().filter((item) => {return !matrix[i].includes(item)})
          const vertical = [matrix[0][j], matrix[1][j], matrix[2][j], matrix[3][j], matrix[4][j], matrix[5][j], matrix[6][j], matrix[7][j], matrix[8][j]]
          const origin = emptyNums.filter((item) => {return !vertical.includes(item)})
          res[i][j] = origin[0]
        }
      }
    }
  }
  return res
}
