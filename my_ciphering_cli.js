const configValidator = require('./validators/configValidator');
const errorHandler = require('./handlers/errorHandler');
const createReadStream = require('./streams/createReadStream');
const createWriteStream = require('./streams/createWriteStream');
const {pipeline} = require('stream');
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
        const writeStream = createWriteStream(output);
        return {
            readStream,
            writeStream
        }
    } catch (e) {
        errorHandler(e);
    }

};
const streams = runApp();
pipeline(
    streams.readStream,
    streams.writeStream,
    (err) => {
        if (err) {
            errorHandler(err);
        }
    }
);


