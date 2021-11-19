const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const AtbashTransformStream = require('./AtbashTransformStream');
const { Transform } = require('stream');
const atbash = new AtbashTransformStream();


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

});
