const fs = require('fs');
const path = require("path");
const {PATH} = require('../env');
const errorHandler = require('../handlers/errorHandler');
const createWriteStream = (patch) => {
    try {
        if (patch) {
            const isExist = fs.existsSync(path.join(PATH, patch));
            if (isExist) {
                return fs.createWriteStream(path.join(PATH, patch), {flags:'a+'});
            } else {
                throw new Error("This output isn't exist");
            }
        } else {
            return process.stdout;
        }

    } catch (e) {
        errorHandler(e);
    }

};

module.exports = createWriteStream;
