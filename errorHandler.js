const errorHandler = (text) => {
    process.stderr.write(text);
    process.exit(42);
};
module.exports = errorHandler;
