const AtbashTransformStream = require('./streams/AtbashTransformStream');
const CaesarTransformStream = require('./streams/CaesarTransformStream');
const Rot8TransformStream = require('./streams/Rot8TransformStream');
module.exports = {
    A: new AtbashTransformStream(),
    C0: new CaesarTransformStream("left"),
    C1: new CaesarTransformStream("right"),
    R0: new Rot8TransformStream("left"),
    R1: new Rot8TransformStream("right"),
};
