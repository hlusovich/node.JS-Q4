const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const CaesarTransformStream = require('./CaesarTransformStream');
const {Transform} = require('stream');
const cesarTransformStreamLeft = new CaesarTransformStream("left");
const cesarTransformStreamRight = new CaesarTransformStream("right");
const {pipeline} = require('stream');
(async () => await pipeline("you",
    cesarTransformStreamRight,
    (err) => {
        if (err) {
        }
    }
))();
let result = '';
cesarTransformStreamRight.on("data", (data) => {
    result += data.toString();
});
describe("Caesar Transform Stream ", () => {
    test("must be instance of Transform stream", () => {
        expect(cesarTransformStreamLeft instanceof Transform).toBe(true);
    });
    test("must encode caesar with left rotation", () => {
        expect(cesarTransformStreamLeft.encode(90)).toBe(89);
    });
    test("must encode caesar with right rotation", () => {
        expect(cesarTransformStreamRight.encode(89)).toBe(90);
    });
    test("test _transform method", () => {
        expect(result).toBe("zpv");
    });

});
