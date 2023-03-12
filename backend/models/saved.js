import mongoose from 'mongoose';

const savedCarSchema = new mongoose.Schema({
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Owner',
    required: true
  }
});

export default mongoose.model('SavedCar', savedCarSchema);
