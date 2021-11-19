const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const CaesarTransformStream = require('./CaesarTransformStream');
const { Transform } = require('stream');
const cesarTransformStreamLeft = new CaesarTransformStream("left");
const cesarTransformStreamRight = new CaesarTransformStream("right");

describe("Caesar Transform Stream ", () => {
    test("must be instance of Transform stream", ()=>{
        expect(cesarTransformStreamLeft instanceof  Transform).toBe(true);
    });
    test("must encode caesar with left rotation", ()=>{
        expect(cesarTransformStreamLeft.encode(90)).toBe(89);
    });
    test("must encode caesar with right rotation", ()=>{
        expect(cesarTransformStreamRight.encode(89)).toBe(90);
    });

});
