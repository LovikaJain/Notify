'Use Strict'

var Controllers = require('../Controllers'),
Joi = require('joi');

var payloadValidation = {

}

module.exports = [
    {
        method: 'GET',
        path: '/user/{_id?}',
        handler: function (request, reply) {
            Controllers.userController.getUser(request.params, function(err, success){
                if(err) {
                    reply(err);
                } else {
                    reply(success).code(200);
                }
            });
        },
        config: {
            description: 'Get All Users',
            tags: ['api','users']
        }
    }
]