const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const isFileValidator = require('./isFileValidator');
const MyError = require('../myError/MyError');
const dirPath = "./dir";
const filePath = "./test2.txt";


describe("isFile validator", () => {
    beforeAll(() => {
        fs.writeFileSync(filePath, "test");
        fs.mkdirSync(dirPath, {recursive: true});
    });
    afterAll(() => {
        fs.unlinkSync(filePath);
        fs.rmSync(dirPath, {recursive: true});
    });
    test("should throw Error", () => {
        expect(() => isFileValidator(dirPath)).toThrow("Input and Output must be files");
    });
    test("should be instance of MyError", () => {
        try {
            isFileValidator(dirPath)
        } catch (e) {
            expect(e instanceof MyError).toBe(true);

        }

    });
    test("should return undefined because file path is correct", () => {
        expect(isFileValidator(filePath)).toBe(undefined);
    });
});

