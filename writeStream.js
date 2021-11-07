const fs = require('fs');
const path = require("path");
const errorHandler = require('./errorHandler');
const createWriteStream = (patch) => {
    try {
        if (patch) {
            const isExist = fs.existsSync(path.join(__dirname, patch));
            if (isExist) {
                return fs.createWriteStream(path.join(__dirname, patch), {flag:'+a'});
            } else {
                throw new Error("This input isn't exist");
            }
        } else {
            return process.stdout;
        }

    } catch (e) {
        errorHandler(e);
    }

};

module.exports = createWriteStream;
