const options = [["-c", "--config"], ["-o", "--output"], ["-i", "--input"]];
const optionsValidator = () => {
    let errorText = "";
    options.map(option => {
        return process.argv.filter((item) => item === option[0] || item === option[1]).length
    }).map((item, index) => {
        if (item > 1) {
            errorText += `Option ${options[index][1].slice(2)} was given ${item} times!!! \n`
        }
    });
    return errorText;
};
module.exports = optionsValidator;
