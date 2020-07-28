const db = require('./index');

module.exports = {
  days: {
    getAll: function() {
      return db('days').orderBy('number');
    },
  }
}