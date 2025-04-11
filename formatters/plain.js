import _ from 'lodash';

const getValue = (data) => {
  if(_.isString(data)) {
    return `'${data}'`;
  }
  if(_.isObject(data) && data !== null) {
    return '[complex value]'
  }
  return data;
};

const getPlainDiff = (diff) => {
  const iteration = (node, path) => {
    const result = node.map((value) => {
      const keypath = (path === '' ? `${value.key}` : `${path}.${value.key}`);

      switch(value.type) {
        case 'removed':
          return `Property '${keypath}' was removed`;
        case 'added':
          return `Property '${keypath}' was added with value ${getValue(value.oldValue)}`;
        case 'nested':
          return iteration(value.children, keypath);
        case 'changed':
          return `Property '${keypath}' was updated. From  ${getValue(value.oldValue)} to ${getValue(value.newValue)}`;
        case 'unchanged':
          return null;
        default:
          throw new Error(`Invalid type of diff: ${value.type}`);
      }
    });
    return [...result].filter(Boolean).join('\n');
  }
  return iteration(diff, '');
};

export default getPlainDiff;
