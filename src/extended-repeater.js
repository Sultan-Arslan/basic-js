function repeater(str, options) {
  str = String(str);
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator === undefined ? '+' : String(options.separator);
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator === undefined ? '|' : String(options.additionSeparator);

  const fullAddition = Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return Array(repeatTimes).fill(str + fullAddition).join(separator);
}

module.exports = {
  repeater
};
