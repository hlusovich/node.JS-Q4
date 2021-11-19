const {expect, describe} = require("@jest/globals");
const Rot8TransformStream = require('./Rot8TransformStream');
const { Transform } = require('stream');
const rot8streamLeft = new Rot8TransformStream("left");
const rot8streamRight = new Rot8TransformStream("right");
const {pipeline} = require('stream');
(async () => await pipeline("you",
    rot8streamRight,
    (err) => {
        if (err) {
        }
    }
))();
let result = '';
rot8streamRight.on("data", (data) => {
    result += data.toString();
});

describe("Rot8 Transform Stream ", () => {
    test("must be instance of Transform stream", ()=>{
        expect(rot8streamLeft instanceof  Transform).toBe(true);
    });
    test("must encode rot8 with left rotation", ()=>{
        expect(rot8streamLeft.encode(90)).toBe(82);
    });
    test("must encode rot8 with right rotation", ()=>{
        expect(rot8streamRight.encode(82)).toBe(90);
    });
    test("test _transform method", () => {
        expect(result).toBe("gwc");
    });

});
