const fs = require("fs");
const MyError = require('../myError/MyError');
const isFileValidator = (path) => {
        const isDir = fs.lstatSync(path).isDirectory();
        if (isDir) {
            throw  new MyError("Input and Output must be files")
        }
};
module.exports = isFileValidator;

