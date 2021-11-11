const fs = require('fs');
const path = require("path");
const {PATH} = require('../env');
const errorHandler = require('../handlers/errorHandler');
const MyReadStream = require('../streams/MyReadableStream');
const MyError = require('../myError/MyError');
const createReadStream = (patch) => {
    try {
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
    } catch (e) {
        errorHandler(e);
    }

};

module.exports = createReadStream;
