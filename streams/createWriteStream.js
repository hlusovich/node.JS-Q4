const fs = require('fs');
const path = require("path");
const errorHandler = require('../handlers/errorHandler');
const createWriteStream = (patch) => {
    try {
        if (patch) {
            const isExist = fs.existsSync(path.join(__dirname, patch));
            if (isExist) {
                return fs.createWriteStream(path.join(__dirname, patch), {flags:'a+'});
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
