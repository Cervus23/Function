'use strict';

const generateKey = (length, possible) => {
  let key = '';
  const base = possible.length;

  while (key.length < length) {
    const index = Math.floor(Math.random() * base);
    key += possible[index];
  }
  return key;
};

module.exports = { generateKey };
