const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    await Message.create({ type: 'contact', name, email, phone, message });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact API error', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

router.post('/donate', async (req, res) => {
  try {
    const { name, email, message, amount } = req.body;
    await Message.create({ type: 'donation', name, email, message, amount: Number(amount) });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Donate API error', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    await Message.create({ type: 'subscribe', email });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Subscribe API error', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

module.exports = router;
