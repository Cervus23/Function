'use strict';
// Generate random Number between from min to max
// Use Math.random() and Math.floor()
// See documentation at MDN

const random = (min, max) => {
  const randomFloor = Math.random() * (max - min) + min;
  const randomInt = Math.floor(randomFloor);
  return randomInt;
};

module.exports = { random };
