const parse = (file, extension) => {
    switch (extension) {
        case '.json':
            return JSON.parse(file)
        default:
            throw new Error(`Unknown ${extension}`)
    }
    ;
};

export default parse;
