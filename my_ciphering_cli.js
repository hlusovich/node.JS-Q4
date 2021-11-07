const configValidator = require('./configValidator');
const parsArgs = (name) => {
    const valueIndex = process.argv.indexOf(name);
    if (~valueIndex) {
        return process.argv[valueIndex + 1];
    }
    return false;
};
const runApp = () => {
    const config = (parsArgs('-c') || parsArgs('-config')).split('-');
    configValidator(config);
    console.log(configValidator(config))
    const input = parsArgs('-i') || parsArgs('--input');
    const output = parsArgs('-o') || parsArgs('--output');
};


runApp();
