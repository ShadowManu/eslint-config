/**
 * This function transforms each rule values into the ESLINT rule array format
 * (i.e. [warningLevel, opts]).  This helps to avoid having to specify
 * everything as an error manually, since this package already wants to be as
 * pedantic as possible.
 */
exports.mapOptionsAsErrors = (rules) => {
  const result = {};

  for (const [name, options] of Object.entries(rules)) {
    const value = (() => {
      if (options === false) return ["off"];
      if (options === true) return ["error"];
      return ["error", options];
    })();

    result[name] = value;
  }

  return result;
};
