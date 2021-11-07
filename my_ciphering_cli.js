const configValidator = require('./configValidator');
const errorHandler = require('./errorHandler');
const parsArgs = (name) => {
    const valueIndex = process.argv.indexOf(name);
    if (~valueIndex) {
        return process.argv[valueIndex + 1];
    }
    return false;
}
const runApp = () => {
    const config = (parsArgs('-c') || parsArgs('-config')).split('-');
    configValidator(config);
    const input = parsArgs('-i') || parsArgs('--input');
    errorHandler("посто так")
    const output = parsArgs('-o') || parsArgs('--output');
};


runApp();
