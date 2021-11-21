const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const CaesarTransformStream = require('./CaesarTransformStream');
const {Transform} = require('stream');
const cesarTransformStreamLeft = new CaesarTransformStream("left");
const cesarTransformStreamRight = new CaesarTransformStream("right");
const encode = cesarTransformStreamRight.encode;
const encodeLEft = cesarTransformStreamLeft.encode;
const mockEndcode = jest.fn((char)=> {return encode(char, cesarTransformStreamRight.rotation)});
const mockEndcodeForLeft = jest.fn((char)=> {return encodeLEft(char, cesarTransformStreamLeft.rotation)});
cesarTransformStreamRight.encode = mockEndcode;
cesarTransformStreamLeft.encode = mockEndcodeForLeft;
const streamData = "you";
const {pipeline} = require('stream');
(async () => await pipeline(streamData,
    cesarTransformStreamRight,
    (err) => {
        if (err) {
        }
    }
))();
(async () => await pipeline(streamData,
    cesarTransformStreamLeft,
    (err) => {
        if (err) {
        }
    }
))();
let resultWithRightRotatin = '';
let resultWithLeftRotation = '';
cesarTransformStreamRight.on("data", (data) => {
    resultWithRightRotatin += data.toString();
});
cesarTransformStreamLeft.on("data", (data) => {
    resultWithLeftRotation += data.toString();
});
describe("Caesar Transform Stream ", () => {
    test("left must be instance of Transform stream", () => {
        expect(cesarTransformStreamLeft instanceof Transform).toBe(true);
    });
    test("right must be instance of Transform stream", () => {
        expect(cesarTransformStreamRight instanceof Transform).toBe(true);
    });
    test("test _transform method rotation", () => {
        expect(resultWithRightRotatin).toBe("zpv");
    });
    test("test _transform method with left rotation", () => {
        expect(resultWithLeftRotation).toBe("xnt");
    });
    test("test encode method with mock", () => {
        expect(mockEndcode.mock.calls.length).toBe(streamData.length);
    });
    test("test encode method with left rot mock", () => {
        expect(mockEndcodeForLeft.mock.calls.length).toBe(streamData.length);
    });
    test("must encode caesar with left rotation", () => {
        expect(cesarTransformStreamLeft.encode(90)).toBe(89);
    });
    test("must encode caesar with right rotation", () => {
        expect(cesarTransformStreamRight.encode(89)).toBe(90);
    });


});
