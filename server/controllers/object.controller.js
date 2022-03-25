const mongoose = require('mongoose');

const Object = require("../models/object.model"); /* this is new */

/* The method below is new */
module.exports.createObject = (request, response) => {
  
  Object.create(request.body) 
    .then((object) => response.json(object))
    .catch((err) => response.json(err));
};
