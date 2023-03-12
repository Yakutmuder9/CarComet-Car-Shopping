import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  car: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car',
    required: true
  },
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Store',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

export default  mongoose.model('Inventory', inventorySchema);
