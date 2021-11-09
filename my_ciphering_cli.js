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
const optionValidator = require('./validators/optionsValidator');
const permissionValidator = require('./validators/permissionValidator');
const runApp = () => {
    try {
        optionValidator();
        const config = configParser();
        if (!config) {
            throw  new Error("Option config is required");
        }
        if (!configValidator(config)) {
            throw  new Error("Config isn't correct. Please check all encoder's names.");
        }
        const input = inputParser();
        const output = outputParser();
        if(input){
            permissionValidator(input);
            console.log(permissionValidator(input))
        }
        if(output){
            permissionValidator(output);
        }
        const readStream = createReadStream(input);
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

const transformStream = new TransformStream(streams.config,commands);

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


