const {START_CHAR_CODE, END_CHAR_CODE, START_CHAR_CODE_UPPER_CASE, END_CHAR_CODE_UPPER_CASE} = require("../env");

function toggleAtbashCode(charCode) {
    if (charCode >= START_CHAR_CODE && charCode <= END_CHAR_CODE_UPPER_CASE) {
        charCode = END_CHAR_CODE - charCode + START_CHAR_CODE;
    } else if (charCode >= START_CHAR_CODE_UPPER_CASE && charCode <= END_CHAR_CODE_UPPER_CASE) {
        charCode = END_CHAR_CODE_UPPER_CASE - charCode + START_CHAR_CODE_UPPER_CASE;
    }
    return String.fromCharCode(charCode);

}

module.exports = toggleAtbashCode;
