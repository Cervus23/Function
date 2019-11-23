'use strict';

// Parse ip address as string, for example '10.0.0.1'
// to ['10', '0', '0', '1'] to [10, 0, 0, 1]
// and convert to Number value 167772161 with sitwise shift
// (10 << 8 << 8 << 8) + (0 << 8 << 8) + (0 << 8) + 1 === 167772161
// Use Array.prototype.reduce of for loop


const ipToInt = (ip = '127.0.0.1') => {
  const shifted = (res, num) => (res << 8) + parseInt(num);
  return ip.split('.').reduce(shifted, 0);
};

module.exports = { ipToInt };
