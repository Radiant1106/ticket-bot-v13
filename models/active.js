const { model, Schema } = require('mongoose');

const sch = new Schema({
  Guild: String,
  Mod: String,
})

module.exports = model('active', sch)