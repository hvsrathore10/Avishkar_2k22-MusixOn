const mongoose = require('mongoose');
const { Schema } = mongoose;

const SongsSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    poster: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    artists: {
        type: String,
        require: true
    },
    album: {
        type: String,
        default: "General"
    },
    duration: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
  });

module.exports = mongoose.model('likedSongs',SongsSchema);
