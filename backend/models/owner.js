import mongoose from 'mongoose';

const ownerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  cars: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car'
  }]
});

export default mongoose.model('Owner', ownerSchema);
