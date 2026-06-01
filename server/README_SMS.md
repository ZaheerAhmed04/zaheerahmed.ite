Twilio SMS Example Server

This is a minimal Express server that sends SMS via Twilio.

Environment variables (create `.env` at project root):

```
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_FROM_NUMBER=+1XXXXXXXXXX   # your Twilio number in E.164 format
PORT=4000
```

Install dependencies and run:

```bash
npm install
node server/send-sms.js
```

Example request (curl):

```bash
curl -X POST http://localhost:4000/send-sms \
  -H "Content-Type: application/json" \
  -d '{"to":"+919XXXXXXXXX","body":"Hello from Zaheer"}'
```

Security note: Keep Twilio credentials secret (use server-side endpoints). Do not embed Twilio auth tokens in client-side code.
