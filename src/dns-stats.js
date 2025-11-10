function getDNSStats(domains) {
  const result = {};
  for (const domain of domains) {
    const parts = domain.split('.').reverse();
    let key = '';
    for (const part of parts) {
      key += '.' + part;
      result[key] = (result[key] || 0) + 1;
    }
  }
  return result;
}

module.exports = {
  getDNSStats
};
