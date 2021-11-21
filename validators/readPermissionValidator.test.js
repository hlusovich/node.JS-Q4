
const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const readPermissionValidator = require('./readPermissionValidator');
const MyError = require('../myError/MyError');
const dirPath = "./dir3";
const filePath = "./t.txt";
const fakeFilePath = "./fakepath.txt";


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
        expect(() => readPermissionValidator(dirPath)).toThrow("Operation read file not permitted");
    });
    test("should be instance of MyError", () => {
        try {
            readPermissionValidator(dirPath)
        } catch (e) {
            expect(e instanceof MyError).toBe(true);
        }

    });
    test("should return true because file path is correct", () => {
        expect(readPermissionValidator(filePath)).toBe(true);
    });
    test("should return Error input file isn't exist", () => {
        expect(()=>readPermissionValidator(fakeFilePath)).toThrow(`Input file isn't exist`);
    });
});
