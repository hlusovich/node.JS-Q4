const fs = require('fs');
const path = require("path");
const {PATH} = require('../env');
const MyError = require('../myError/MyError');
const createWriteStream = (patch) => {
    if (patch) {
        const isExist = fs.existsSync(path.join(PATH, patch));
        if (isExist) {
            return fs.createWriteStream(path.join(PATH, patch), {flags: 'a+'});
        } else {
            throw new MyError("This output isn't exist");
        }
    } else {
        return process.stdout;
    }

};

module.exports = createWriteStream;
