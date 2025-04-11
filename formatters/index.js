import getStylishDiff from "./stylish.js";
import getPlainDiff from "./plain.js";

const chooseFormat = (diff, format) => {
    switch (format) {
        case "plain":
         return getPlainDiff(diff);
    
        case "stylish":
            getStylishDiff(diff, ' ', 2);

        default:
            throw new Error(`Unknown type of format: ${format}`);
    };;
};

export default chooseFormat;
