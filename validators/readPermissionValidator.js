const fs = require("fs");
const MyError = require('../myError/MyError');
const {PATH} = require('../env');
const path = require("path");

function checkReadPermission(filePatch) {
    let errorText = "Operation read file not permitted";
    try {
        const isExist = fs.existsSync(path.join(PATH, filePatch));
        if (isExist) {
            fs.readFileSync(filePatch, 'utf8');
        } else {
            errorText = `Input file isn't exist`;
            throw  new MyError(`Input file isn't exist`);
        }
    } catch (err) {
        throw  new MyError(errorText)
    }
}
module.exports = checkReadPermission;
