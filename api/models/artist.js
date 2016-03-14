import mongoose from '../helpers/database';

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  dob: {
    type: Number,
    required: true,
  },

  dod: {
    type: Number,
  },

  bio: {
    type: String,
    required: true,
  },

  sigUrl: {
    type: String,
    required: true,
  },

  photoUrls: [
    {
      type: String,
      required: true,
    },
  ],

  artifacts: [
    {
      name: {
        type: String,
      },
      description: {
        type: String,
      },
      location: {
        type: String,
      },
    },
  ],
});

export { schema };
export const Artist = mongoose.model('Artist', schema);

