const commands = require('./commandsForTransformStream');
const AtbashTransformStream = require('./streams/AtbashTransformStream');
const Rot8TransformStream = require('./streams/Rot8TransformStream');
const CaesarTransformStream = require('./streams/CaesarTransformStream');
const {expect,describe} = require("@jest/globals");
describe("My commands", ()=>{
    const A = commands['A']();
    const C0 = commands['C0']();
    const C1 = commands['C1']();
    const R0 = commands['R0']();
    const R1 = commands['R1']();
    test(" A should be instance of AtbashTransformStream", () => {
        expect(A instanceof AtbashTransformStream).toBe(true);
    });
    test(" C0 should be instance of CaesarTransformStream", () => {
        expect(C0 instanceof CaesarTransformStream).toBe(true);
    });
    test(" C1 should be instance of CaesarTransformStream", () => {
        expect(C1 instanceof CaesarTransformStream).toBe(true);
    });
    test(" C0 rotation should be left", () => {
        expect(C0.rotation).toBe("left");
    });
    test(" C1  rotation  should be right", () => {
        expect(C1.rotation).toBe("right");
    });
    test(" R0 should be instance of Rot8TransformStream", () => {
        expect(R0 instanceof Rot8TransformStream).toBe(true);
    });
    test(" R1 should be instance of Rot8TransformStream", () => {
        expect(R1 instanceof Rot8TransformStream).toBe(true);
    });
});



