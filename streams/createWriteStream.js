const fs = require('fs');
const path = require("path");
const {PATH} = require('../env');
const MyError = require('../myError/MyError');
const createWriteStream = (filePath) => {
    if (filePath) {
        const isExist = fs.existsSync(path.join(PATH, filePath));
        console.log(path.join(PATH, filePath))
        if (isExist) {
            return fs.createWriteStream(path.join(PATH, filePath), 'utf8');
        } else {
            throw new MyError("This output isn't exist");
        }
    } else {
        return process.stdout;
    }
};

module.exports = createWriteStream;
