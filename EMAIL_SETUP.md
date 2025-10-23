# Email Integration Guide

The contact and quote forms are now set up with API routes. Currently, they log submissions to the console. To actually send emails, you need to integrate an email service.

## Current Setup

### API Routes Created:
- `/app/api/contact/route.ts` - Handles contact form submissions
- `/app/api/quote/route.ts` - Handles quote request submissions

### Forms Updated:
- `components/contact/contact-form.tsx` - Sends data to contact API
- `components/quote/quote-form.tsx` - Sends data to quote API

## Email Service Integration Options

### Option 1: Resend (Recommended - Free tier available)

1. Install Resend:
```bash
pnpm add resend
```

2. Get API key from [resend.com](https://resend.com)

3. Add to `.env.local`:
```env
RESEND_API_KEY=your_api_key_here
```

4. Update API routes:
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// In your POST handler:
await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'Yusufmagaji3041@gmail.com',
  subject: 'New Contact Form Submission',
  html: `<pre>${emailBody}</pre>`
})
```

### Option 2: SendGrid

1. Install SendGrid:
```bash
pnpm add @sendgrid/mail
```

2. Get API key from [sendgrid.com](https://sendgrid.com)

3. Add to `.env.local`:
```env
SENDGRID_API_KEY=your_api_key_here
```

4. Update API routes:
```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

// In your POST handler:
await sgMail.send({
  to: 'Yusufmagaji3041@gmail.com',
  from: 'your-verified@email.com',
  subject: 'New Contact Form Submission',
  text: emailBody,
  html: `<pre>${emailBody}</pre>`
})
```

### Option 3: Nodemailer (with Gmail)

1. Install Nodemailer:
```bash
pnpm add nodemailer
pnpm add -D @types/nodemailer
```

2. Set up Gmail App Password:
   - Go to Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password

3. Add to `.env.local`:
```env
EMAIL_USER=Yusufmagaji3041@gmail.com
EMAIL_PASS=your_app_password_here
```

4. Update API routes:
```typescript
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// In your POST handler:
await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: 'Yusufmagaji3041@gmail.com',
  subject: 'New Contact Form Submission',
  text: emailBody,
  html: `<pre>${emailBody}</pre>`
})
```

### Option 4: AWS SES (For production scale)

1. Install AWS SDK:
```bash
pnpm add @aws-sdk/client-ses
```

2. Set up AWS credentials

3. Update API routes with SES client

## Current Behavior

Right now, when forms are submitted:
- ✅ Data is validated
- ✅ API endpoint receives the data
- ✅ Success/error messages are shown to users
- ✅ Forms reset after successful submission
- ⏳ Email is logged to console (not sent)

To actually send emails, choose one of the options above and integrate it into the API routes.

## Testing

To test the current setup:
1. Fill out the contact or quote form
2. Submit the form
3. Check the browser console or server logs
4. You should see the form data logged there

## Recommended: Start with Resend

Resend is recommended because:
- ✅ Free tier: 100 emails/day
- ✅ Simple setup
- ✅ Built for Next.js
- ✅ Good documentation
- ✅ Modern API
