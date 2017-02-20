const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

mongoose.Promise = global.Promise;

const emojiSchema = new Schema({
  _id: Schema.Types.ObjectId,
  emoji: String,
  name: String
});

const Emoji = mongoose.model('Emoji', emojiSchema);

module.exports = Emoji;
