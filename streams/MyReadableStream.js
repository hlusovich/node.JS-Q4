const {Readable} = require('stream');
const { Buffer } = require ( 'buffer');
const fs = require('fs');
const permissionValidator = require('../validators/permissionValidator');
const isFileValidator = require('../validators/isFileValidator');

class MyReadableStream extends Readable {
    constructor(filename) {
        super();
        this.filename = filename;
        this.fd = null;
    }
    _construct(callback){
        if (this.filename) {
            permissionValidator(this.filename);
            isFileValidator(this.filename);
        }
        fs.open(this.filename,(err,fd)=>{
            if(err){
                callback(err)
            }
            else{
                this.fd = fd;
                callback()
            }

        })
    }
    _read(n) {
        const buf = Buffer.alloc(n);
        fs.read(this.fd, buf, 0, n, null, (err, bytesRead) => {
            if (err) {
                this.destroy(err);
            } else {
                this.push(bytesRead > 0 ? buf.slice(0, bytesRead) : null);
            }
        });
    }
    _destroy(err, callback) {
        if (this.fd) {
            fs.close(this.fd, (er) => callback(er || err));
        } else {
            callback(err);
        }
    }
}

module.exports = MyReadableStream;
