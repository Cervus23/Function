'use strict';

const methods = iface => {
  const introspected = [];
  for (const name in iface) {
    const fn = iface[name];
    if (typeof fn === 'function') {
      introspected.push([name, fn.length]);
    }
  }
  return introspected;
};

module.exports = { methods };
