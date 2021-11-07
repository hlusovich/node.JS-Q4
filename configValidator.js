const availableCommands = {
    A: ["A"],
    C: ["C1", "C0"],
    R: ["R1", "R0"],
};
const validateConfig = (config) => {
    return config.every(item => {
        if (availableCommands[item[0]] && availableCommands[item[0]].includes(item)) {
            return true;
        }
        return false
    })
};
module.exports = validateConfig;
