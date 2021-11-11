const fs = require('fs');
const path = require("path");
const {PATH} = require('../env');
const MyError = require('../myError/MyError');
const MyWriteStream = require('../streams/MyWritableStream');
const createWriteStream = (filePath) => {
    if (filePath) {
        const isExist = fs.existsSync(path.join(PATH, filePath));
        if (isExist) {
            return new MyWriteStream(path.join(PATH, filePath));
        } else {
            throw new MyError("This output isn't exist");
        }
    } else {
        return process.stdout;
    }

};

module.exports = createWriteStream;
