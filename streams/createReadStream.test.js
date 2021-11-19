const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const createReadStream = require('./createReadStream');
const filePath = "./tes.txt";
const incorrectFilePath = "./incorrect2.txt";
const MyReadableStream = require('./MyReadableStream');


describe("read stream creator ", () => {
    beforeAll(() => {
        fs.writeFileSync(filePath, "test");
    });
    afterAll(() => {
        fs.unlinkSync(filePath);
    });
    test("get correct path and should return instance of MyReadableStream", ()=>{
        expect(createReadStream(filePath) instanceof MyReadableStream).toBe(true);
    });
    test("get incorrect path and should return error This input isn't exist", ()=>{
        expect(()=>createReadStream(incorrectFilePath) ).toThrow("This input isn't exist");
    });

});
