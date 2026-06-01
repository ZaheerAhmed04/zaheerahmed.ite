require('dotenv').config();
const express = require('express');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
app.use(cors());
app.use(express.json());

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER } = process.env;
if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_FROM_NUMBER) {
  console.warn('Twilio environment variables are not all set. SMS will not work until they are configured.');
}

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

// POST /send-sms
// body: { to: "+919XXXXXXXXX", body: "Message text" }
app.post('/send-sms', async (req, res) => {
  const { to, body } = req.body;
  if (!to || !body) return res.status(400).json({ error: 'Missing `to` or `body` in request' });

  try {
    const msg = await client.messages.create({
      from: TWILIO_FROM_NUMBER,
      to,
      body,
    });
    res.json({ sid: msg.sid, status: msg.status });
  } catch (err) {
    console.error('Twilio error:', err);
    res.status(500).json({ error: err.message || 'Twilio error' });
  }
});

// POST /send-sms-to-owner
// Send SMS to the owner's phone number configured in .env
// body: { name: "John", email: "john@example.com", message: "Hello..." }
app.post('/send-sms-to-owner', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing name, email, or message' });

  const toNumber = process.env.TWILIO_TO_NUMBER;
  if (!toNumber) return res.status(400).json({ error: 'TWILIO_TO_NUMBER not configured' });

  try {
    const smsBody = `New message from ${name} (${email}):\n${message}`;
    const msg = await client.messages.create({
      from: TWILIO_FROM_NUMBER,
      to: toNumber,
      body: smsBody,
    });
    res.json({ sid: msg.sid, status: msg.status });
  } catch (err) {
    console.error('Twilio error:', err);
    res.status(500).json({ error: err.message || 'Twilio error' });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`SMS server listening on http://localhost:${port}`));
