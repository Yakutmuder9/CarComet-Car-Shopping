import mongoose from 'mongoose';

const searchSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  maxPrice: {
    type: Number,
    required: true
  }
});

export default mongoose.model('Search', searchSchema);
