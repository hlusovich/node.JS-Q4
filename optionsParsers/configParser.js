const parsArgs = require('./basicParser');
const configParser = ()=>{
    return (parsArgs('-c') || parsArgs('--config')) || false;
};
module.exports = configParser;
