const fs = require('fs');
const path = require("path");
const {PATH} = require('../env');
const errorHandler = require('../handlers/errorHandler');
const createReadStream = (patch) => {
    try {
        if (patch) {
            const isExist = fs.existsSync(path.join(PATH, patch));
            if (isExist) {
                return fs.createReadStream(path.join(PATH, patch), 'utf8');
            } else {
                throw new Error("This input isn't exist");
            }
        } else {
            return process.stdin;
        }

    } catch (e) {
        errorHandler(e);
    }

};

module.exports = createReadStream;
