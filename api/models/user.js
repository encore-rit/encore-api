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

  state: {
    type: String,
    enum: ['TAKING', 'READY', 'FINISHED', 'APPROVED'],
    default: 'TAKING',
  },
},
{ timestamps: true });

export { schema };
export const User = mongoose.model('User', schema);
