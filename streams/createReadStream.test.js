const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const {Readable} = require('stream');
const createReadStream = require('./createReadStream');
const filePath = "./tes.txt";
const incorrectFilePath = "./incorrect2.txt";
let readStream = null;

describe("read stream creator ", () => {
    beforeAll(async () => {
        fs.writeFileSync(filePath, "test");
        readStream = await createReadStream(filePath);
    });
    afterAll(() => {
        setTimeout( ()=>fs.unlinkSync(filePath), 0);

    });
    test("get correct path and should return instance of ReadableStream", ()=>{
        expect( readStream instanceof Readable).toBe(true);
    });
    test("get incorrect path and should return error This input isn't exist",  ()=>{
        expect(()=>createReadStream(incorrectFilePath) ).toThrow("This input isn't exist");
    });
    test("if no path", ()=>{
        expect( createReadStream() instanceof Readable).toBe(true);
    });

});
