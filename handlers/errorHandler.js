const errorHandler = ({message}) => {
    process.stderr.write(`Error ${message}`);
    process.exit(42);
};
module.exports = errorHandler;
