const parsArgs = require('./basicParser');
const outputParser = ()=>{
    return parsArgs('-o') || parsArgs('--output') || false;
};
module.exports = outputParser;
