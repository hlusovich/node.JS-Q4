const fs = require("fs");
const MyError = require('../myError/MyError');

function checkWritePermission(path) {
    try {
        fs.appendFileSync(path, '');
    } catch (err) {
        throw  new MyError("Operation write file not permitted")
    }
}
module.exports = checkWritePermission;
