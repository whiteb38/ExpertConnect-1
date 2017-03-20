var mongoose = require('mongoose');

module.exports = mongoose.model('Expert', {
  name: {type : String, default: ''}
});
