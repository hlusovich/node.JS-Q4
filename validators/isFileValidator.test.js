const validateConfig = require('../../tests/nodeJsQ4-tests/validators/configValidator');
const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const isFileValidator = require('./isFileValidator');
const myError = new Error("test for error handler");
const dirPath = "./dir";
const filePath = "./test.txt";


describe("isFile validator", () => {
    beforeAll(() => {
        fs.writeFile(filePath, "test", (err) => {
            if (err) throw err;
        });
        fs.mkdirSync(dirPath, {recursive: true});
    });
    afterAll(() => {
        fs.unlink(filePath, (err) => {
            if (err) {
                throw err;
            }
        });
        fs.rmSync(dirPath, {recursive: true});
    });
    test("should throw Error", () => {
        expect(() => isFileValidator(dirPath)).toThrow("Input and Output must be files");
    });
    test("should be instance of MyError", () => {
        expect(() => isFileValidator(dirPath)).toThrow(myError);
    });
    test("should return undefined because file path is correct", () => {
        expect( isFileValidator(filePath)).toBe(undefined);
    });
});

