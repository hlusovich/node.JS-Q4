const fs = require('fs');
const path = require("path");
const errorHandler = require('./errorHandler');
const createReadStream = (input) => {
    try {
        if (input) {
            const isExist = fs.existsSync(path.join(__dirname, input));
            if (isExist) {
                return fs.createReadStream(path.join(__dirname, input), 'utf8');
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
