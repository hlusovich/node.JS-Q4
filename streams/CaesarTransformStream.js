const {Transform} = require('stream');
const {START_CHAR_CODE, END_CHAR_CODE, START_CHAR_CODE_UPPER_CASE, END_CHAR_CODE_UPPER_CASE, ALPHABET_LENGTH} = require("../env");

class CaesarTransformStream extends Transform {
    constructor(rotation) {
        super();
        this.rotation = rotation;
    }

    encode(charCode, rotation, step) {
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
        } else if (charCode >= START_CHAR_CODE_UPPER_CASE && charCode <= END_CHAR_CODE_UPPER_CASE) {
            switch (rotation) {
                case "left":
                    charCode -= step;
                    if (charCode < START_CHAR_CODE_UPPER_CASE) {
                        charCode = charCode + ALPHABET_LENGTH;
                    }
                    break;
                case "right":
                    charCode += step;
                    if (charCode > END_CHAR_CODE_UPPER_CASE) {
                        charCode = charCode - ALPHABET_LENGTH;
                    }
                    break
            }
        }
        return charCode;

    }
    _transform(chunk, encoding, done) {
        let result = chunk.map(item => {
            return this.encode(item, this.rotation);
        });
        this.push(result, encoding);
        done();
    }
}

module.exports = CaesarTransformStream;
