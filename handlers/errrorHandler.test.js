const {expect} = require("@jest/globals");
const errorHandler = require('./errorHandler');
const MyError = require('../myError/MyError');
const error = new Error("test for error handler");

test("should return Error", () => {
    expect(() => errorHandler(error)).toThrow(error);
});
test("should return correct Errors text", () => {
    expect(() => errorHandler(error)).toThrow("test for error handler");

});


