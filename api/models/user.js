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

  memory: {
    type: String,
  },

  state: {
    type: String,
    enum: ['WAITING', 'TAKING', 'READY', 'EDITING', 'FINISHED', 'APPROVED'],
    default: 'WAITING',
  },
},
{ timestamps: true });

export { schema };
export const User = mongoose.model('User', schema);
