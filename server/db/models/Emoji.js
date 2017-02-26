const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

mongoose.Promise = global.Promise;

const emojiSchema = new Schema({
  _id: Schema.Types.ObjectId,
  emoji: String,
  data: {
    "aliases_ascii": [],
    "unicode": String,
    "code_decimal": String,
    "category": String,
    "emoji_order": String,
    "aliases": [],
    "unicode_alt": String,
    "name": String,
    "shortname": String,
    "keywords": []
  },
  count: Number
});

const Emoji = mongoose.model('Emoji', emojiSchema);

module.exports = Emoji;
