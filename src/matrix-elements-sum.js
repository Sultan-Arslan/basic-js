function getMatrixElementsSum(matrix) {
  if (!matrix.length) return 0;
  const cols = matrix[0].length;
  const blocked = Array(cols).fill(false);
  let sum = 0;

  for (let row of matrix) {
    for (let i = 0; i < cols; i++) {
      if (!blocked[i]) {
        sum += row[i];
        if (row[i] === 0) blocked[i] = true;
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
