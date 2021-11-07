const configValidator = require('./configValidator');
const errorHandler = require('./errorHandler');
const createReadStream = require('./readStream');
const {pipeline} = {'stream'};
const parsArgs = (name) => {
    const valueIndex = process.argv.indexOf(name);
    if (~valueIndex) {
        return process.argv[valueIndex + 1];
    }
    return false;
}
const runApp = () => {
    try {
        const config = (parsArgs('-c') || parsArgs('--config')) || false;
        if (!config) {
            throw  new Error("Option config is required");
        }
        if (!configValidator(config)) {
            throw  new Error("Config isn't correct");
        }
        const input = parsArgs('-i') || parsArgs('--input') || false;
        const readStream = createReadStream(input);
        const output = parsArgs('-o') || parsArgs('--output') || false;
        return {
            readStream
        }
    } catch (e) {
        errorHandler(e);
    }

};
const streams = runApp();
pipeline(
    streams.readStream,
);


