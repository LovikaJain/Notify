'use strict';

var SERVER = {
    APP_NAME: 'notifi',
    PORTS: {
        LOCAL: 3000,
        DEV: 3001
    }
};

SERVER.SCHEME = 'http';
SERVER.HOST = '127.0.0.1';
SERVER.PORT = process.env.PORT || 3000;


var ENV = (process.env.NODE_ENV || 'LOCAL').trim();

if (ENV === 'DEV') {
    SERVER.HOST = ''
}
i
if (ENV === 'LOCAL') {
    SERVER.HOST = '127.0.0.1';
}

var DOMAIN_NAME = SERVER.SCHEMES+'://'+SERVER.HOST+':'+SERVER.PORT;


module.exports = {
    SERVER: SERVER,
    DOMAIN_NAME: DOMAIN_NAME
};
