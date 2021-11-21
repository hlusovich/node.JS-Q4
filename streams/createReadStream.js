const fs = require('fs');
const path = require("path");
const {PATH} = require('../env');
const MyError = require('../myError/MyError');
const createReadStream = (filePath) => {
    if (filePath) {
        const isExist = fs.existsSync(path.join(PATH, filePath));
        if (isExist) {
            return fs.createReadStream(path.join(PATH, filePath),'utf8');
        } else {
            throw new MyError("This input isn't exist");
        }
    } else {
        return process.stdin;
    }


};

module.exports = createReadStream;
