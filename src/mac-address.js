function isMAC48Address(n) {
  const macRegex = /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/;
  return macRegex.test(n);
}

module.exports = {
  isMAC48Address
};
