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
});

export { schema };
export const Artist = mongoose.model('Artist', schema);

