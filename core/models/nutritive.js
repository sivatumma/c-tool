var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var nutritiveSchema = new Schema({
  name: {
    type: String
  },

  moisture: {
    type: Number,
  },
});

var Nutritive = mongoose.model('Nutritive', nutritiveSchema);
module.exports = Nutritive;