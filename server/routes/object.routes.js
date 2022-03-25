const mongoose = require('mongoose');

const ObjectController = require('../controllers/object.controller');  //Import the code from Code Block 1
module.exports = (app) => {
    app.get('/api', ObjectController.createObject);
    app.post('/api/object', ObjectController.createObject);
}
