import _ from 'lodash';

const getStylishDiff = (data, spaceSymbol = ' ', spaceCounter = 1) => {
    const iterration = (currentData, depth) => {
        if(!_.isObject(typeof currentData, typeof [] || currentData === null)) {
            return `${currentData}`;
        }

    const padding = spaceCounter * depth;
    const frontPadding = spaceSymbol.repeat(padding - 1);
    const backPadding = spaceSymbol.repeat(padding - spaceCounter);
    const lines = Object
       .entries(currentData)
       .map(([key,value]) => {
        if(key.startsWith('+ ') || key.startsWith('- ')) {
            return `${frontPadding}${key}: ${iterration(value, depth + 1)}`;
        }
        return `${frontPadding}  ${key}: ${iterration(value, depth + 1)}`;
       })
       return ['{', ...lines, `${backPadding}}`].join('\n');
    };
    return iterration(data, 1);
};

export default getStylishDiff;
