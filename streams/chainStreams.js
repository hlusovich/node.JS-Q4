const commands = require('../commandsForTransformStream');
const chainStreams = (read, write, options) => {
    const streams = options.split('-').map(option => commands[option]());
    return [read, ...streams, write];
};
module.exports = chainStreams;
