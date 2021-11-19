const fs = require('fs');
const path = require("path");
const {PATH} = require('../env');
const errorHandler = require('../handlers/errorHandler');
const MyReadStream = require('../streams/MyReadableStream');
const MyError = require('../myError/MyError');
const createReadStream = (filePath) => {
    if (filePath) {
        const isExist = fs.existsSync(path.join(PATH, filePath));
        if (isExist) {
            return new MyReadStream(path.join(PATH, filePath));
        } else {
            throw new MyError("This input isn't exist");
        }
    } else {
        return process.stdin;
    }


};

module.exports = createReadStream;
