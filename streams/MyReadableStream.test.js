const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const filePath = "./testReadable.txt";
const MyReadableStream = require('./MyReadableStream');
const { Readable } = require('stream');
let myReadableStream  = null;

describe(" My readable stream  ", () => {
    beforeAll(() => {
        fs.writeFileSync(filePath, "test");
        myReadableStream = new MyReadableStream(filePath);
    });
    afterAll(() => {
        setTimeout( ()=>fs.unlinkSync(filePath), 0);
    });
    test("should be instance of Readable",  ()=>{
        expect(myReadableStream instanceof Readable).toBe(true);
    });

});
