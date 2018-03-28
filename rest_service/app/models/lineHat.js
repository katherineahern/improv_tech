var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var LineHat   = new Schema({
    line: String,
    timestamp: String
});

module.exports = mongoose.model('LineHat', LineHat);
