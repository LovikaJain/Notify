'use strict';

var development = 'mongodb://mongo:27017/dev';
var local = 'mongodb://localhost/diesel-local';

//e.g. var mongoURI = 'mongodb://username:password@host:port/database?options...';

var mongodbURI = {
    development: development,
    local: local
};

var mongodbCRED = {
    MONGO_CRED_DEV: {user: '', pass: ''},
    MONGO_CRED_LOCAL: {user: '', pass: ''}
};

module.exports = {
    mongodbURI: mongodbURI,
    mongodbCRED: mongodbCRED
};
