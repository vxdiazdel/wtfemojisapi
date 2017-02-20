const mongoose = require('mongoose');

const db = require('./../db/models');

const getEmojis = (req, res) => {
  db.Emoji.find({}).then((emojis) => {
    res.status(200).json({
      status: 'success',
      data: emojis
    });
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error',
      data: err
    });
  });
};

const getEmoji = (req, res) => {
  const query = req.params.query;
  if (mongoose.Types.ObjectId.isValid(query)) {
    db.Emoji.findById(query).then((emoji) => {
      res.status(200).json({
        status: 'success',
        data: emoji
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    });
  } else {
    db.Emoji.findOne({name: query}).then((emoji) => {
      res.status(200).json({
        status: 'success',
        data: emoji
      });
    })
    .catch((err) => {
      res.status(500).json({
        status: 'error',
        data: err
      });
    });
  }
};

const getRandomEmoji = (req, res) => {
  db.Emoji.count({}).then((count) => {
    let random = Math.floor(Math.random() * count);
    db.Emoji.findOne().skip(random).then((doc) => {
      res.status(200).json({
        status: 'success',
        data: doc
      })
    });
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error',
      data: err
    });
  });
};

module.exports = {
  getEmojis,
  getEmoji,
  getRandomEmoji
};
