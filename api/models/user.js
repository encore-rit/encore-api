import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
  },

  artist: {
    type: mongoose.Schema.ObjectId,
    ref: 'Artist',
    required: true,
  },

  photos: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Photo',
    },
  ],
});

export { schema };
export const User = mongoose.model('User', schema);
