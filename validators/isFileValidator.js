const fs = require("fs");
const errorHandler = require('../handlers/errorHandler');
const isFileValidator = (path) => {
    try {
        const isDir = fs.lstatSync(path).isDirectory();
        if (isDir) {
            throw  new Error("Input and Output must be files")
        }
    } catch (e) {
        errorHandler(e);

    }
};
module.exports = isFileValidator;

