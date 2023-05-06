const Thought = require("./Thought");

const { Schema, model } = require('mongoose');
const UserSchema = new Schema(
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
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    toJSON: {
      virtuals: true 
    },
    id: false 
  }
);

// create a virtual property called 'friendCount' that retrieves the length of the 'friends' array
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = mongoose.model('User', UserSchema);

module.exports = User;