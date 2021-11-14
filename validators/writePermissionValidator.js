const fs = require("fs");
const MyError = require('../myError/MyError');
const {PATH} = require('../env');
const path = require("path");
const errorHandler = require('../handlers/errorHandler');

function checkWritePermission(filePatch) {
    try {
        const isExist = fs.existsSync(path.join(PATH, filePatch));
        if (isExist) {
            fs.appendFileSync(filePatch, '');
        } else {
            throw  new MyError(`Output file isn't exist`)
        }

    } catch (err) {
        if (err instanceof MyError) {
            errorHandler(err);
        } else {
            throw  new MyError("Operation write file not permitted")
        }

    }
}

module.exports = checkWritePermission;
