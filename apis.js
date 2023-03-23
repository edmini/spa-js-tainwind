const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

module.exports = function handler () {
    router.use(bodyParser.json());

    router.get('/', function(req, res) {
        res.json({"title" : "Hello Title"});
    });

//   router.post('/api', (req, res) => {
//     ...
//   });

    return router;
}