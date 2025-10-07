'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add: function (a) {
      calculator.result += a;
    },
    subtract: function (a) {
      calculator.result -= a;
    },
    multiply: function (a) {
      calculator.result *= a;
    },
    divide: function (a) {
      calculator.result /= a;
    },
    reset: function () {
      calculator.result = 0;

      return this;
    },
    operate: function (callback, a) {
      callback(a);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
