const {Transform} = require('stream');

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
