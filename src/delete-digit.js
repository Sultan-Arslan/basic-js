function deleteDigit(n) {
  const str = String(n);
  let max = -Infinity;
  for (let i = 0; i < str.length; i++) {
    const num = Number(str.slice(0, i) + str.slice(i + 1));
    if (num > max) max = num;
  }
  return max;
}

module.exports = {
  deleteDigit
};
