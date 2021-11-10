const fs = require('fs');
const path = require("path");
const {PATH} = require('../env');
const MyReadStream = require('../streams/MyReadableStream');
const MyError = require('../myError/MyError');
const createReadStream = (patch) => {
    if (patch) {
        const isExist = fs.existsSync(path.join(PATH, patch));
        if (isExist) {
            return new MyReadStream(path.join(PATH, patch));
        } else {
            throw new MyError("This input isn't exist");
        }
    } else {
        return process.stdin;
    }
};

module.exports = createReadStream;
