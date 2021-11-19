const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const createWriteStream = require('./createWriteStream');
const filePath = "./testFile.txt";
const incorrectFilePath = "./incorrectTestFile.txt";
const MyWritableStream = require('./MyWritableStream');


describe("write stream creator ", () => {
    beforeAll(() => {
        fs.writeFileSync(filePath, "test");
    });
    afterAll(() => {
        fs.unlinkSync(filePath);
    });
    test("get correct path and should return instance of MyWritableStream", ()=>{
        expect(createWriteStream(filePath) instanceof MyWritableStream).toBe(true);
    });
    test("get incorrect path and should return error This output isn't exist", ()=>{
        expect(()=>createWriteStream(incorrectFilePath) ).toThrow("This output isn't exist");
    });

});
