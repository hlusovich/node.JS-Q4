const MyError = require('./MyError');
const {expect,describe} = require("@jest/globals");
describe("My error", ()=>{
    const myError = new MyError("Some text");
    test("should be instance of Error", () => {
     expect(myError instanceof Error).toBe(true);
    });
    test("should be instance with message some text", () => {
        expect(myError.message ).toBe("Some text");
    });
});



