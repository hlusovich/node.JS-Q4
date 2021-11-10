const errorHandler = require('../handlers/errorHandler')

class MyError extends Error {
    constructor(message) {
        super(message);
        errorHandler({message});
    }
}

module.exports = MyError;
