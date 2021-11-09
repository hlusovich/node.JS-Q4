const atbashCode = require("./encoders/atbashCode");
const cesarCode = require("./encoders/caesarCode");
const rot8code = require("./encoders/rot8Code");

module.exports = {
    A: (item) => atbashCode(item),
    C0: (item) => cesarCode(item, 1, "left"),
    C1: (item) => cesarCode(item, 1, "right"),
    R0: (item) => rot8code(item, 'left'),
    R1: (item) => rot8code(item, 'right'),
}
