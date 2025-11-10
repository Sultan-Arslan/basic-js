function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!'; // добавлен "!"

  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth();
  if (month === 11 || month === 0 || month === 1) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
}

module.exports = {
  getSeason
};
