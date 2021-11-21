const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const createWriteStream = require('./createWriteStream');
const filePath = "./testF.txt";
const incorrectFilePath = "./incorrectTestFile.txt";
const {Writable} = require('stream');
let writeStream = null;

describe("write stream creator ", () => {
    beforeAll(async () => {
        fs.writeFileSync(filePath, "test");
         writeStream = await createWriteStream(filePath);
    });
    afterAll(() => {
        setTimeout( ()=>fs.unlinkSync(filePath), 0);
    });
    test("get correct path and should return instance of MyWritableStream", async ()=>{
        expect( writeStream instanceof Writable).toBe(true);
        writeStream.end();
    });
    test("get incorrect path and should return error This output isn't exist", ()=>{
        expect(()=>createWriteStream(incorrectFilePath) ).toThrow("This output isn't exist");
    });
    test("if no path", ()=>{
        expect( createWriteStream() instanceof Writable).toBe(true);
    });

});
