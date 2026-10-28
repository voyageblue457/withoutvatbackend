export const FIXED_ADDITION = 0.75;

/**
 * Calculates the internal total amount (selected base amount + fixed 0.75)
 * @param {number|string} amount Selected base amount
 * @returns {number} Internal total amount
 */
export const getInternalAmount = (amount) => {
  if (amount === undefined || amount === null || amount === '') return 0;
  const amt = parseFloat(String(amount).replace(/[^0-9.]/g, ''));
  if (isNaN(amt) || amt <= 0) return 0;

  return Number((amt + FIXED_ADDITION).toFixed(2));
};

/**
 * Helper to get the fee amount
 * @param {number|string} amount
 * @returns {number} Fixed fee amount (0.75)
 */
export const getFeeForAmount = (amount) => {
  if (amount === undefined || amount === null || amount === '') return 0;
  const amt = parseFloat(String(amount).replace(/[^0-9.]/g, ''));
  if (isNaN(amt) || amt <= 0) return 0;

  return FIXED_ADDITION;
};
