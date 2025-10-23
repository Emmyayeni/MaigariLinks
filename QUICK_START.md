# Quick Start: Enable Email Sending

## Current Status ✅
Your contact and quote forms are now fully functional with:
- Form validation
- API endpoints
- Loading states
- Error handling
- Success messages

## What Happens Now?
When users submit forms, the data is:
1. ✅ Validated
2. ✅ Sent to the API
3. ✅ Logged to the console
4. ✅ Confirmed with success message
5. ⏳ **NOT yet sent via email** (you need to enable this)

## Enable Email Sending (Choose One):

### Option A: Use Resend (Recommended - 5 minutes setup)

1. **Install Resend:**
```bash
pnpm add resend
```

2. **Get API Key:**
   - Visit https://resend.com
   - Sign up for free account
   - Get your API key from dashboard

3. **Add Environment Variable:**
Create `.env.local` in your project root:
```env
RESEND_API_KEY=re_your_actual_api_key_here
```

4. **Uncomment Code in API Routes:**

In `app/api/contact/route.ts`:
```typescript
// Change this:
// import { Resend } from 'resend'

// To this:
import { Resend } from 'resend'

// Change this:
// const resend = new Resend(process.env.RESEND_API_KEY)

// To this:
const resend = new Resend(process.env.RESEND_API_KEY)

// Uncomment the email sending code in the POST handler
```

Do the same for `app/api/quote/route.ts`

5. **Restart your dev server:**
```bash
pnpm dev
```

Done! 🎉

### Option B: Use Gmail (Traditional method)

See `EMAIL_SETUP.md` for detailed Nodemailer setup with Gmail.

### Option C: Use SendGrid

See `EMAIL_SETUP.md` for SendGrid integration.

## Test Your Forms

1. Start your dev server: `pnpm dev`
2. Go to `/contact` or `/quote`
3. Fill out and submit the form
4. Check the console logs to see the data

Once email is enabled, you'll receive actual emails!

## Need Help?

Refer to `EMAIL_SETUP.md` for detailed setup instructions for all email service options.
