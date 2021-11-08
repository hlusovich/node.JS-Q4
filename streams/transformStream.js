const {Transform} = require('stream');
const cesarCode = require('../encoders/caesarCode');
const atbashCode = require('../encoders/atbashCode');
const rot8code = require('../encoders/rot8Code');
const {Buffer} = require('buffer');

class MyTransformStream extends Transform {
    constructor(options) {
        super();
        this.options = options.split('-');
        this.config = {
            A: (item) => atbashCode(item),
            C0: (item) => cesarCode(item, 1, "right"),
            C1: (item) => cesarCode(item, 1, "left"),
            R0: (item) => rot8code(item, 'right'),
            R1: (item) => rot8code(item, 'left'),
        }
    }

    _transform(chunk, encoding, done) {
        let result = chunk;
        this.options.map(option => {
            result = result.map(item => {
                return this.config[option](item)
            });
        });
        this.push(result, encoding);
        done();
    }
}

module.exports = MyTransformStream;
