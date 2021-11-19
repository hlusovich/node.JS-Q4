const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const createWriteStream = require('./createWriteStream');
const filePath = "./testReadable.txt";
const MyReadableStream = require('./MyReadableStream');
const { Readable } = require('stream');


describe(" My readable stream  ", () => {
    beforeAll(() => {
        fs.writeFileSync(filePath, "test");
    });
    afterAll(() => {
        fs.unlinkSync(filePath);
    });
    test("should be instance of Readable", ()=>{
        expect(new MyReadableStream(filePath) instanceof Readable).toBe(true);
    });

});
