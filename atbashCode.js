const {ALPHABET_LENGTH, START_CHAR_CODE, END_CHAR_CODE} = require("./env");

function toggleAtbashCode(char) {
    let charCode = char.charCodeAt();
    if (charCode >= START_CHAR_CODE && charCode <= END_CHAR_CODE) {
        charCode = END_CHAR_CODE - charCode + START_CHAR_CODE;
        return String.fromCharCode(charCode);
    } else {
        return char;
    }
}

module.exports = toggleAtbashCode;
