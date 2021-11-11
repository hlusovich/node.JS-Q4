const MyError = require('../myError/MyError');
const errorHandler = (error) => {
    if (error instanceof MyError) {
        process.stderr.write(`Error ${e.message}`);
        process.exit(42);
    }
    else{
        throw  new Error(e.message);
    }

};
module.exports = errorHandler;
