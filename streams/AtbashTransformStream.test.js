const {expect, describe} = require("@jest/globals");
const AtbashTransformStream = require('./AtbashTransformStream');
const { Transform } = require('stream');
const atbash = new AtbashTransformStream();
const encode = atbash.encode;
const mockEndcode = jest.fn((char)=> {return encode(char)});
atbash.encode = mockEndcode;
const {pipeline} = require('stream');
const streamData = "you";
(async () => await pipeline(streamData,
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
    test("test _transform method", () => {
        expect(result).toBe("blf");
    });
    test("test encode method with mock", () => {
        expect(mockEndcode.mock.calls.length).toBe(streamData.length);
    });
    test("must encode atbash ", ()=>{
        expect(atbash.encode(90)).toBe(65);
    });
    test("must decode atbash ", ()=>{
        expect(atbash.encode(65)).toBe(90);
    });
    test("must encode atbash with no english alphabet", () => {
        expect(atbash.encode(40)).toBe(40);
    });
});
