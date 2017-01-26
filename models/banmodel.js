const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const banSchema = new Schema({
  userid: { type: String, required: true, unique: true },
  name: String,
  groupid: String
});

const Ban = mongoose.model('Ban', banSchema, 'bans');

module.exports = Ban;
