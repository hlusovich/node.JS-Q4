const fs = require("fs");
const MyError = require('../myError/MyError');
const errorHandler = require('../handlers/errorHandler');
const isFileValidator = (path) => {
    try {
        const isDir = fs.lstatSync(path).isDirectory();
        if (isDir) {
            throw  new MyError("Input and Output must be files")
        }
    } catch (e) {
        errorHandler(e);
    }

};
module.exports = isFileValidator;

