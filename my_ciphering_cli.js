const configValidator = require('./validators/configValidator');
const errorHandler = require('./handlers/errorHandler');
const createReadStream = require('./streams/createReadStream');
const createWriteStream = require('./streams/createWriteStream');
const TransformStream = require('./streams/TransformStream');
const {pipeline} = require('stream');
const commands = require('./commands');
const configParser = require('./optionsParsers/configParser');
const inputParser = require('./optionsParsers/inputParsers');
const outputParser = require('./optionsParsers/outputParses');
const optionValidator = require('./validators/optionsValidator');
const permissionValidator = require('./validators/permissionValidator');
const isFileValidator = require('./validators/isFileValidator');

const MyError = require('./myError/MyError');
const runApp = () => {
    optionValidator();
    const config = configParser();
    if (!config) {
        throw  new MyError("Option config is required");
    }
    if (!configValidator(config)) {
        throw  new MyError("Config isn't correct. Please check all encoder's names.");
    }
    const input = inputParser();
    const output = outputParser();
    if (output) {
        permissionValidator(output);
        isFileValidator(output);
    }
    const readStream = createReadStream(input);
    const writeStream = createWriteStream(output);
    return {
        readStream,
        writeStream,
        config
    }

};

const streams = runApp();

const transformStream = new TransformStream(streams.config, commands);

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


