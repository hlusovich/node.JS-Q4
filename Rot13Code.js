const {START_CHAR_CODE, END_CHAR_CODE, ALPHABET_LENGTH} = require("./env");

function toggleRot8Code(char) {
    const step = 8;
    let charCode = char.charCodeAt();
    if (charCode >= START_CHAR_CODE && charCode <= END_CHAR_CODE) {
        charCode += step;
        if(charCode> END_CHAR_CODE){
            charCode = charCode - ALPHABET_LENGTH;
        }
        return String.fromCharCode(charCode);
    } else {
        return char;
    }
}
module.exports = toggleRot13Code;
