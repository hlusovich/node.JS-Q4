const validateConfig = require('../../tests/nodeJsQ4-tests/validators/configValidator');
const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const isFileValidator = require('./isFileValidator');
const MyError = require('../myError/MyError');
const myError = new MyError("Input and Output must be files");
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

