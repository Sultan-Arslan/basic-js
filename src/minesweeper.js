function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j]) continue;
      let count = 0;

      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          if (dx === 0 && dy === 0) continue;
          const x = i + dx;
          const y = j + dy;
          if (x >= 0 && x < rows && y >= 0 && y < cols && matrix[x][y]) {
            count++;
          }
        }
      }

      result[i][j] = count;
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j]) result[i][j] = 1;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
