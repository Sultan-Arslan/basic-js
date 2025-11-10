function getCommonCharacterCount(s1, s2) {
  const count1 = {};
  const count2 = {};
  for (const c of s1) count1[c] = (count1[c] || 0) + 1;
  for (const c of s2) count2[c] = (count2[c] || 0) + 1;
  let total = 0;
  for (const c in count1) {
    if (count2[c]) total += Math.min(count1[c], count2[c]);
  }
  return total;
}

module.exports = { getCommonCharacterCount };
