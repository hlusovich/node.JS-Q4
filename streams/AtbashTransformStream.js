const {Transform} = require('stream');
const {
    START_CHAR_CODE,
    END_CHAR_CODE,
    START_CHAR_CODE_UPPER_CASE,
    END_CHAR_CODE_UPPER_CASE,
} = require("../env");

class AtbashTransformStream extends Transform {
    constructor() {
        super();
    }

    encode(charCode) {
        if (charCode >= START_CHAR_CODE && charCode <= END_CHAR_CODE) {
            charCode = END_CHAR_CODE - charCode + START_CHAR_CODE;
        } else if (charCode >= START_CHAR_CODE_UPPER_CASE && charCode <= END_CHAR_CODE_UPPER_CASE) {
            charCode = END_CHAR_CODE_UPPER_CASE - charCode + START_CHAR_CODE_UPPER_CASE;
        }
        return charCode;

    }
    _transform(chunk, encoding, done) {
        let result = chunk.map(item => {
            return this.encode(item);
        });
        this.push(result, encoding);
        done();
    }
}


module.exports = AtbashTransformStream;
