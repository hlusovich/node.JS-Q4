const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const AtbashTransformStream = require('./AtbashTransformStream');
const { Transform } = require('stream');
const atbash = new AtbashTransformStream();
const {pipeline} = require('stream');
(async () => await pipeline("you",
    atbash,
    (err) => {
        if (err) {
        }
    }
))();
let result = '';
atbash.on("data", (data) => {
    result += data.toString();
});

describe("atbash stream", () => {
    test("must be instance of Transform stream", ()=>{
        expect( atbash instanceof  Transform).toBe(true);
    });
    test("must encode atbash ", ()=>{
        expect(atbash.encode(90)).toBe(65);
    });
    test("must decode atbash ", ()=>{
        expect(atbash.encode(65)).toBe(90);
    });
    test("test _transform method", () => {
        expect(result).toBe("blf");
    });
});
