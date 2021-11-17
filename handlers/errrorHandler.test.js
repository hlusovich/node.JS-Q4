const {expect} = require("@jest/globals");
const errorHandler = require('./errorHandler');
const myError = new Error("test for error handler");

test("should return Error", () => {
    expect(() => errorHandler(myError)).toThrow(myError);
});
test("should return correct Errors text", () => {
    expect(() => errorHandler(myError)).toThrow("test for error handler");
});
