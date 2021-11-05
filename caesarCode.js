const {ALPHABET_LENGTH, START_CHAR_CODE, END_CHAR_CODE} = require("./env");

function toggleCaesarCode(char, step, rotation) {
    let charCode = char.charCodeAt();
    if (step > ALPHABET_LENGTH) {
        step = step % ALPHABET_LENGTH;
    }
    if (charCode >= START_CHAR_CODE && charCode <= END_CHAR_CODE) {
        switch (rotation) {
            case "left":
                charCode -= step;
                if (charCode < START_CHAR_CODE) {
                    charCode = charCode + ALPHABET_LENGTH;
                }
                break;
            case "right":
                charCode += step;
                if (charCode > END_CHAR_CODE) {
                    charCode = charCode - ALPHABET_LENGTH;
                }
                break
        }
        return String.fromCharCode(charCode);
    } else {
        return char;
    }
}
module.exports = toggleCaesarCode;
