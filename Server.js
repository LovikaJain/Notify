var Hapi = require('hapi');
var mongoose = require('mongoose');

var Config = require('./Config');
var Controllers = require('./Controllers')
var Routes = require('./Routes')


// set DB environment

if (process.env.NODE_ENV === 'DEV') {
    PORT = Config.APP_CONSTANTS.SERVER.PORTS.DEV;
    MONGO_DB_URI = Config.dbConfig.mongodbURI.development;
    MONGO_CRED = Config.dbConfig.mongodbCRED.MONGO_CRED_DEV;
}
if (process.env.NODE_ENV === 'LOCAL') {
    PORT = Config.APP_CONSTANTS.SERVER.PORTS.LOCAL;
    MONGO_DB_URI = Config.dbConfig.mongodbURI.local;
    MONGO_CRED = Config.dbConfig.mongodbCRED.MONGO_CRED_LOCAL;
}

//Create HAPI Server
var server = new Hapi.Server({
    app: {
        name: Config.APP_CONSTANTS.SERVER.APP_NAME
    }
});

var connectionOptions = {
    port: process.env.PORT || PORT,
    routes: {
        cors: true,
        log: true
    }
};

server.connection(connectionOptions);

//Connect to MongoDB
mongoose.connect(MONGO_DB_URI, MONGO_CRED, function (err) {
    server.log("Mongo connected ", err);
    if (err) {
        server.log("DB Error: ", err);
        process.exit(1);
    } else {
        server.log('MongoDB Connected at', MONGO_DB_URI);
    }
});

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: 'public',
            listing: false,
            index: true
        }
    }
});

//Default Routes
server.route(
    {
        method: 'GET',
        path: '/',
        handler: function (req, res) {
            //TODO Change for production server
            res.view('index')
        }
    }
);

// API routes
server.route(Routes);

// Start server
server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
});

                        