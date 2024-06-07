const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const participantSchema = new Schema({
  fullname: String,
  email: String,
  phone: String,
  address: String,
  city: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  status: {
    isChecked: Boolean,
    checkedInAt: String,
    checkedOutAt: String
  }
  
},{ timestamps: true });
module.exports = mongoose.model('Participant', participantSchema);
