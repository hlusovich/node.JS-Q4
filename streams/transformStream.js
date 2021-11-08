const {Transform} = require('stream');
const cesarCode = require('../encoders/caesarCode');
const atbashCode = require('../encoders/atbashCode');
const rot8code = require('../encoders/rot8Code');
const {Buffer} = require('buffer');

class MyTransformStream extends Transform {
    constructor(options, commands) {
        super();
        this.options = options.split('-');
        this.commands = commands
    }

    _transform(chunk, encoding, done) {
        let result = chunk;
        this.options.map(option => {
            result = result.map(item => {
                return this.commands[option](item)
            });
        });
        this.push(result, encoding);
        done();
    }
}

module.exports = MyTransformStream;
