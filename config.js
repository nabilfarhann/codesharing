'use strict'

module.exports = {
    mailer: {
        service: 'Gmail',
        auth: {
            user: 'nabilfarhan.dev@gmail.com',
            pass: ''
        }
    },
    dbConnstring: 'mongodb://admin:<password>@sharingcode-shard-00-00-fmn60.mongodb.net:27017,sharingcode-shard-00-01-fmn60.mongodb.net:27017,sharingcode-shard-00-02-fmn60.mongodb.net:27017/codesharing?ssl=true&replicaSet=sharingcode-shard-0&authSource=admin&retryWrites=true&w=majority',
    sessionKey: 'HaloCodeSharing'
}