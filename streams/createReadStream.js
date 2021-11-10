const fs = require('fs');
const path = require("path");
const {PATH} = require('../env');
const MyError = require('../myError/MyError');
const createReadStream = (patch) => {
    if (patch) {
        const isExist = fs.existsSync(path.join(PATH, patch));
        if (isExist) {
            return fs.createReadStream(path.join(PATH, patch), 'utf8');
        } else {
            throw new MyError("This input isn't exist");
        }
    } else {
        return process.stdin;
    }
};

module.exports = createReadStream;
