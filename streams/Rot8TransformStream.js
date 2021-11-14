const {Transform} = require('stream');
const {
    START_CHAR_CODE,
    END_CHAR_CODE,
    START_CHAR_CODE_UPPER_CASE,
    END_CHAR_CODE_UPPER_CASE,
    ALPHABET_LENGTH
} = require("../env");

class Rot8TransformStream extends Transform {
    constructor(rotation) {
        super();
        this.rotation = rotation;
    }

    encode(charCode, rotation) {
        const step = 8;
        if (charCode >= START_CHAR_CODE && charCode <= END_CHAR_CODE) {
            if (rotation === "right") {
                charCode += step;
                if (charCode > END_CHAR_CODE) {
                    charCode = charCode - ALPHABET_LENGTH;
                }
            } else {
                charCode -= step;
                if (charCode < START_CHAR_CODE) {
                    charCode = charCode + ALPHABET_LENGTH;
                }
            }
        } else if (charCode >= START_CHAR_CODE_UPPER_CASE && charCode <= END_CHAR_CODE_UPPER_CASE) {
            if (rotation === "right") {
                charCode += step;
                if (charCode > END_CHAR_CODE_UPPER_CASE) {
                    charCode = charCode - ALPHABET_LENGTH;
                }
            } else {
                charCode -= step;
                if (charCode < START_CHAR_CODE_UPPER_CASE) {
                    charCode = charCode + ALPHABET_LENGTH;
                }
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

module.exports = Rot8TransformStream;
