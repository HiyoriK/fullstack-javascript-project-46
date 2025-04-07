import _ from 'lodash';

const compare  = (data1, data2) => {
    const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

    const difference  = keys.map((key) => {
        if(!Object.hasOwn(data2, key)) {
            return ` - ${key}: ${data1[key]}`;
        }
        if(!Object.hasOwn(data1, key)) {
            return ` + ${key}: ${data2[key]}`;
        }
        if(data1[key] !== data2[key]) {
            return ` - ${key}: ${data1[key]}\n + ${key}: ${data2[key]}`;
        }
        return `   ${key}: ${data1[key]}`;
    })
    return `{\n${difference.join('\n')}\n}`;
};

export default compare;
