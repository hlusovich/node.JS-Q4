const child_process = require("child_process");
const {expect, describe, afterEach, beforeEach} = require("@jest/globals");
const fs = require('fs');
const fileInputName = "./input2.txt";
const outputFileName = "./output2.txt";

describe("Error scenarios", () => {
    beforeEach(() => {
        fs.writeFileSync(fileInputName, "This is secret. Message about \"_\" symbol!");
        fs.writeFileSync(outputFileName, "");
    });
    afterEach(() => {
        fs.unlinkSync(fileInputName);
        fs.unlinkSync(outputFileName);
    });

    test("1 should return Error that argument c was provided twice  node my_caesar_cli -c C1-C1-A-R0 -c C0",  () => {
        try {
            child_process.execSync("node my_ciphering_cli -c \"C1-C1-R0-A\" -i \"./input2.txt\" -o \"./output2.txt\" -c \"C0\"" );
        } catch (e) {
            expect(e.message).toContain(" Option config was given 2 times!!!");
        }
    });
    test("2 should return Error doesn't pass config node my_caesar_cli", () => {
        try {
            child_process.execSync("node my_ciphering_cli " );
        } catch (e) {
            expect(e.message).toContain("Option config is required");
        }
    });
    test("3 should return Error that path for input isn't exist ", () => {
        try {
            child_process.execSync("node my_ciphering_cli -c \"C1-C1-R0-A\" -i \"./incorrectWay.txt\" -o \"./output2.txt\"" );
        } catch (e) {
            expect(e.message).toContain(" Input file isn't exist");
        }
    });
    test("4 should return Error that path for output isn't exist ", () => {
        try {
            child_process.execSync("node my_ciphering_cli -c \"C1-C1-R0-A\" -i \"./input2.txt\" -o \"./incorrect.txt\"" );
        } catch (e) {
            expect(e.message).toContain("Output file isn't exist");
        }
    });
    test("5 Error Scenario  Config isn't correct. Please check all encoder's names. -c \"C1-R1-C0-C0-A-R0-R1-R1-A-C1\" -i \"./input.txt\" -o \"./output.txt\"", () => {
        try {
            child_process.execSync("node my_ciphering_cli -c \"C1-R1-C0-C0-A-R0-R1-R1-A-C\" -i \"./input2.txt\" -o \"./output2.txt");
        } catch (e) {
            expect(e.message).toContain(" Config isn't correct. Please check all encoder's names.")
        }
    });

});
