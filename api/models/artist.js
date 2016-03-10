import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  genres: [
    {
      type: String,
    },
  ],

  photos: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Photo',
    },
  ],

  artifacts: [
    {
      name: { type: String },
      description: { type: String },
      location: { type: String },
    },
  ],
});

export { schema };
export const Artist = mongoose.model('Artist', schema);

