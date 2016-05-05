import mongoose from '../helpers/database';

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
  },

  artist: {
    type: String,
    required: true,
  },

  artistKey: {
    type: String,
    required: true,
  },

  photos: [
    {
      type: String,
    },
  ],

  editedPhoto: {
    type: String,
  },
});

export { schema };
export const User = mongoose.model('User', schema);
