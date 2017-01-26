const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const modSchema = new Schema({
  userid: { type: String, required: true, unique: true },
  name: String
});

const  Mod = mongoose.model('Mod', modSchema, 'mods');

module.exports = Mod;
