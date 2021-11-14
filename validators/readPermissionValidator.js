const fs = require("fs");
const MyError = require('../myError/MyError');

function checkReadPermission(path) {
    try {
        fs.readFileSync(path, 'utf8');
    } catch (err) {
        throw  new MyError("Operation read file not permitted")
    }
}
module.exports = checkReadPermission;
