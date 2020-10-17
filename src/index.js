// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (matrix == undefined) {
      return []
    } else {
      for (let i = 1; i < matrix.length + 1; i++) {
        if (i % 2 !== 0) {
            arr = arr.concat(matrix[i-1]);
        } else {
            revArr = matrix[i-1].reverse();
            arr = arr.concat(revArr);
        }
    }
    return arr;
    }
    
}
