const fs = require("fs");
const errorHandler = require('../handlers/errorHandler');

function checkPermission(path) {
    try {
        fs.accessSync(path, fs.constants.W_OK | fs.constants._OK)
    } catch (err) {
        errorHandler(err)
    }

}

module.exports = checkPermission;
