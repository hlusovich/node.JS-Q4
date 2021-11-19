const child_process = require("child_process");
const {expect, describe, afterEach, beforeEach} = require("@jest/globals");
const fs = require('fs');
const MyError = require('./myError/MyError');

const options = {
    cwd: __dirname
};


describe("integration tests", () => {
    beforeEach(() => {
        fs.writeFileSync('./input.txt', "This is secret. Message about \"_\" symbol!");
        fs.writeFileSync("./output.txt", "");
    });
    afterEach(() => {
        fs.unlinkSync('./input.txt');
        fs.unlinkSync("./output.txt");
    });

    test("test first scenario node my_ciphering_cli -c \"C1-C1-R0-A\" -i \"./input.txt\" -o \"./output.txt\"", () => {
        child_process.execSync("node my_ciphering_cli -c \"C1-C1-R0-A\" -i \"./input.txt\" -o \"./output.txt", options);
        const result = fs.readFileSync("./output.txt", {encoding: 'utf-8'});
        expect(result).toBe("Myxn xn nbdobm. Tbnnfzb ferlm \"_\" nhteru!");
    });
    test("test second scenario node my_ciphering_cli -c \"C1-C0-A-R1-R0-A-R0-R0-C1-A\" -i \"./input.txt\" -o \"./output.txt\"", () => {
            child_process.execSync("node my_ciphering_cli -c \"C1-C0-A-R1-R0-A-R0-R0-C1-A\" -i \"./input.txt\" -o \"./output.txt");
            const result = fs.readFileSync("./output.txt", {encoding: 'utf-8'});
            expect(result).toBe("Vhgw gw wkmxkv. Ckwwoik onauv \"_\" wqcnad!");
        }
    );

    test("test third scenario node my_ciphering_cli -c \"A-A-A-R1-R0-R0-R0-C1-C1-A\" -i \"./input.txt\" -o \"./output.txt\"", () => {
        child_process.execSync("node my_ciphering_cli -c \"A-A-A-R1-R0-R0-R0-C1-C1-A\" -i \"./input.txt\" -o \"./output.txt", options);
        const result = fs.readFileSync("./output.txt", {encoding: 'utf-8'});
        expect(result).toBe("Hvwg wg gsqfsh. Asggous opcih \"_\" gmapcz!");


    });
    test("test fourth scenario node my_ciphering_cli -c \"C1-R1-C0-C0-A-R0-R1-R1-A-C1\" -i \"./input.txt\" -o \"./output.txt\"", () => {
        child_process.execSync("node my_ciphering_cli -c \"C1-R1-C0-C0-A-R0-R1-R1-A-C1\" -i \"./input.txt\" -o \"./output.txt", options);
        const result = fs.readFileSync("./output.txt", {encoding: 'utf-8'});
        expect(result).toBe("This is secret. Message about \"_\" symbol!");
    });

});


