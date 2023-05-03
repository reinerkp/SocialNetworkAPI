const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^\S+@\S+\.\S+$/ // matches a valid email address
    },
    thoughts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Thought'
    }],
    friends: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    toJSON: {
      virtuals: true // include virtual properties when object is serialized to JSON
    },
    id: false // disable the default '_id' field
  }
);

// create a virtual property called 'friendCount' that retrieves the length of the 'friends' array
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = mongoose.model('User', UserSchema);

module.exports = User;