const commands = require('../commandsForTransformStream');
const availableCommands = Object.keys(commands);
const validateConfig = (config) => {
    return config.split('-').every(item => {
        if (availableCommands.includes(item)) {
            return true;
        }
        return false
    })
};
module.exports = validateConfig;
