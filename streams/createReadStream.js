const fs = require('fs');
const path = require("path");
const errorHandler = require('../handlers/errorHandler');
const createReadStream = (patch) => {
    try {
        if (patch) {
            const isExist = fs.existsSync(path.join(__dirname, patch));
            if (isExist) {
                return fs.createReadStream(path.join(__dirname, patch), 'utf8');
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
