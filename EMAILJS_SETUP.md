# EmailJS Setup Guide

## Quick Start (5 minutes)

### 1. Create EmailJS Account
- Go to [emailjs.com](https://www.emailjs.com/)
- Sign up with your Google account or email
- Verify your email

### 2. Connect Gmail Service
1. After login, click **Email Services** (left sidebar)
2. Click **Create New Service**
3. Select **Gmail** from the list
4. Click **Connect Gmail Account**
5. Select your account: `mohamedfarhan15029@gmail.com`
6. Click **Create Service**
7. **Copy your Service ID** (format: `service_xxxxx`)

### 3. Create Email Template
1. Click **Email Templates** (left sidebar)
2. Click **Create New Template**
3. Fill in:
   - **Template Name**: `portfolio_contact`
   - **Subject**: `New Portfolio Message from {{from_name}}`
   - **Email Content**:
   ```
   From: {{from_name}} ({{from_email}})
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
4. Click **Save**
5. **Copy your Template ID** (format: `template_xxxxx`)

### 4. Get Your Public Key
1. Click **Account** (top right) → **API Keys**
2. Under "Public Key" section, copy the long string
3. This is your **Public Key**

### 5. Update Your Portfolio Code

Open `script.js` and replace these lines (top of the file):

```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // ← Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';   // ← Replace with your Template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';     // ← Replace with your Public Key
```

**Example:**
```javascript
const EMAILJS_SERVICE_ID = 'service_a1b2c3d4e5f6g7h8';
const EMAILJS_TEMPLATE_ID = 'template_xyz123abc';
const EMAILJS_PUBLIC_KEY = 'YourVeryLongPublicKeyStringHere';
```

### 6. Test Your Contact Form
1. Save the changes to `script.js`
2. Open your portfolio in a browser
3. Fill out the contact form and submit
4. Check your email - you should receive the message!

---

## Troubleshooting

**"Failed to send message" error?**
- Check that all three credentials (Service ID, Template ID, Public Key) are correctly copied
- Make sure you spelled them exactly as shown in EmailJS
- Check browser console (F12 → Console tab) for detailed error messages

**Not receiving emails?**
- Check your spam/promotions folder
- Make sure Gmail service is properly connected in EmailJS
- Verify the template has the correct variable names: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

**Still having issues?**
- Check EmailJS dashboard for activity logs
- Try sending a test email from EmailJS dashboard first
- Ensure your Gmail account allows less secure app access (if needed)

---

## Security Note
Your Public Key is safe to share publicly (it's in the code). Only keep your Private Key secret!

Enjoy! 🚀
