const validateConfig = require('./configValidator');
const {expect,describe} = require("@jest/globals");

describe("config validator", ()=>{
    test("should return true", () => {
        expect( validateConfig("C1-C1-R0-A")).toBe(true);
    });
    test("should return false", () => {
        expect( validateConfig("C1-C1-R-A")).toBe(false);
    });
});

