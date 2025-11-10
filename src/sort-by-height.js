function sortByHeight(arr) {
  const heights = arr.filter(v => v !== -1).sort((a, b) => a - b);
  let i = 0;
  return arr.map(v => (v === -1 ? -1 : heights[i++]));
}

module.exports = {
  sortByHeight
};
