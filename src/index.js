/* @flow */
/* eslint no-param-reassign: ["error", { "props": false }] */
/* eslint import/no-dynamic-require: [0] */
/* eslint global-require: [0] */

function factory(defaults: Object = {}, requirePath: string) {
  return () => new Proxy(defaults, {
    get(target, name: string) {
      if (!target[name]) {
        target[name] = require(`${(requirePath || '').toString()}${name}`);
      }
      return target[name];
    },
  });
}

export default function laconiar(...argv: [Object, string]) {
  const serviceFactory = factory(...argv);
  const result = (...args: any) => ({
    R: serviceFactory(...args),
  });
  result.factory = serviceFactory;
  return result;
}
