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
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Artist',
    required: true,
  },

  photos: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Photo',
    },
  ],
});

export { schema };
export const User = mongoose.model('User', schema);
