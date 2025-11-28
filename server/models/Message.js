const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema(
  {
    type: { type: String, default: 'contact' },
    name: String,
    email: String,
    phone: String,
    message: String,
    amount: Number,
    meta: Object
  },
  { timestamps: true }
);

module.exports = mongoose.models.Message || mongoose.model('Message', MessageSchema);
