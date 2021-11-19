const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const fs = require('fs');
const createWriteStream = require('./createWriteStream');
const filePath = "./test.txt";
const MyWritableStream = require('./MyWritableStream');
const { Writable } = require('stream');


describe(" My writeable stream  ", () => {
    test("should be instance of Writable", ()=>{
        expect(new MyWritableStream(filePath) instanceof Writable).toBe(true);
    });

});
