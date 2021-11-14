const errorHandler = require('./handlers/errorHandler');
const {pipeline} = require('stream');
const streams = require('./runApp');
pipeline(
    streams,
    (err) => {
        if (err) {
            errorHandler(err);
        }
    }
);



