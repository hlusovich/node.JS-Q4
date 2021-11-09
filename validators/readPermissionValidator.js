const fs = require("fs");
function canRead(path, callback) {
    fs.accessSync(path, fs.constants.R_OK, function(err) {
        callback(null, !err);
    });
}

module.exports = canRead;
