const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  const activity = parseFloat(sampleActivity);
  if (!sampleActivity || typeof sampleActivity !== 'string' || isNaN(activity) || activity <= 0 || activity > MODERN_ACTIVITY) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / k);
}

module.exports = { dateSample };
