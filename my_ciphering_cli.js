const configValidator = require('./validators/configValidator');
const errorHandler = require('./handlers/errorHandler');
const createReadStream = require('./streams/createReadStream');
const createWriteStream = require('./streams/createWriteStream');
const TransformStream = require('./streams/transformStream');
const {pipeline} = require('stream');
const commands = require('./commands');
const configParser = require ('./optionsParsers/configParser');
const inputParser = require ('./optionsParsers/inputParsers');
const outputParser = require ('./optionsParsers/outputParses');
const runApp = () => {
    try {
        const config = configParser();
        if (!config) {
            throw  new Error("Option config is required");
        }
        if (!configValidator(config)) {
            throw  new Error("Config isn't correct");
        }
        const input = inputParser();
        const readStream = createReadStream(input);
        const output = outputParser();
        const writeStream = createWriteStream(output);
        return {
            readStream,
            writeStream,
            config
        }
    } catch (e) {
        errorHandler(e);
    }

};
const streams = runApp();
const transformStream = new TransformStream(streams.config,    commands);
pipeline(
    streams.readStream,
    transformStream,
    streams.writeStream,
    (err) => {
        if (err) {
            errorHandler(err);
        }
    }
);


