const options = [["-c", "--config"], ["-o", "--output"], ["-i", "--input"]];
const errorHandler = require('../handlers/errorHandler');
const optionsValidator = () => {
    try {
        let errorText = "";
        options.map(option => {
            return process.argv.filter((item) => item === option[0] || item === option[1]).length
        }).map((item, index) => {
            if (item > 1) {
                errorText += `Option ${options[index][1].slice(2)} was given ${item} times!!! \n`
            }
        });
        if (errorText) {
            throw new Error(errorText)
        }
    }
    catch (e) {
        errorHandler(e)
    }

};
module.exports = optionsValidator;
