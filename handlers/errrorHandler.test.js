const {expect} = require("@jest/globals");
const errorHandler = require('./errorHandler');
const myError = new Error("test error handler");

test("should return Error", () => {
    expect(() => errorHandler(myError)).toThrow(myError);
});
test("should return Errors text", () => {
    expect(() => errorHandler(myError)).toThrow("test error handler");
});
