const parsArgs = require('./basicParser');
const inputParser = ()=>{
    return parsArgs('-i') || parsArgs('--input') || false;
};
module.exports = inputParser;
