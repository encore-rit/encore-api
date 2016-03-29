import mongoose from '../helpers/database';

const schema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },

  postUrl: {
    type: String,
  },

  // Perhaps filters to apply to the original?
  // filters: {
  //   type: Object,
  //   required: false,
  // }
});

export { schema };
export const Photo = mongoose.model('Photo', schema);
