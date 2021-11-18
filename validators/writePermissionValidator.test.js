const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const writePermissionValidator = require('./writePermissionValidator');
const MyError = require('../myError/MyError');
const dirPath = "./dir2";
const filePath = "./test4.txt";
const fakeFilePath = "./test3.txt";


describe("read permission validator", () => {
    beforeAll(() => {
        fs.writeFileSync(filePath, "test");
        fs.mkdirSync(dirPath, {recursive: true});
    });
    afterAll(() => {
        fs.unlinkSync(filePath);
        fs.rmSync(dirPath, {recursive: true});
    });
    test("should throw Error", () => {
        expect(() => writePermissionValidator(fakeFilePath)).toThrow(`Output file isn't exist`);
    });
    test("should be instance of MyError", () => {
        try {
            writePermissionValidator(dirPath)
        } catch (e) {
            expect(e instanceof MyError).toBe(true);
        }
    });
    test("should return undefined because file path is correct", () => {
        expect(writePermissionValidator(filePath)).toBe(undefined);
    });
});
