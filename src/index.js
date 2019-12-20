/* @flow */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint import/no-dynamic-require: [0] */
/* eslint global-require: [0] */

export default function laconiar(defaults: Object = {}) {
  return () => new Proxy(defaults, {
    get(target, name: string) {
      if (!target[name]) {
        target[name] = require(name);
      }
      return target[name];
    },
  });
}

laconiar.factory = (defaults: Object = {}) => (...args: any) => ({
  R: laconiar(defaults)(...args),
});
