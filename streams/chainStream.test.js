const {expect, describe, beforeAll, afterAll} = require("@jest/globals");
const chainStreams = require('./chainStreams');
const createReadStream = require('./createReadStream');
const createWriteStream = require('./createWriteStream');
const fileInputPath = "./chainTestInput.txt";
const fileOutputPath = "./chainTestOutput.txt";
const fs = require('fs');
describe( "chain stream", ()=>{
    beforeAll(() => {
        fs.writeFileSync(fileInputPath, "This is secret. Message about \"_\" symbol!");
        fs.writeFileSync(fileOutputPath, "");
    });
    afterAll(() => {
        fs.unlinkSync(fileInputPath);
        fs.unlinkSync(fileOutputPath);
    });
   test("should transform This is secret. Message about \"_\" symbol! to Hvwg wg gsqfsh. Asggous opcih \"_\" gmapcz!", async ()=>{
       await chainStreams(createReadStream(fileInputPath), createWriteStream(fileOutputPath), "C1-R1-C0-C0-A-R0-R1-R1-A-C1" );
       setTimeout(()=>{
           const result = fs.readFileSync(fileOutputPath, {encoding: 'utf-8'});
           expect(result).toBe("Hvwg wg gsqfsh. Asggous opcih \"_\" gmapcz!");
       },0)

   })
});
