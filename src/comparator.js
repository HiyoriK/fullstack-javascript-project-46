import _ from 'lodash';

const buildTree  = (data1, data2) => {
    const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

    const difference  = keys.map((key) => {
        if (!_.has(data1, key)) {
            return { key: key, value: data2[key], type: 'added'};
        }
        if (!_.has(data2, key)) {
            return { key: key, value: data1[key], type: 'removed'};
        } 
        if (data1[key] instanceof Object && data2[key] instanceof Object) {
            return { key: key, children: buildTree(data1[key], data2[key]), type: 'nested' };
        }
        if(data1[key] === data2[key]) {
            return { key, value:data2[key], type: 'unchanged' };
        }
        if(data1[key] !== data2[key]) {
            return { key, oldValue: data1[key], newValue: data2[key], type: 'changed' };
        }
        return null;
    });
    return difference;
};

export default buildTree;
