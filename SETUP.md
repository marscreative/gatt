# 🚀 GATT Website Setup Guide

## Node.js Backend with Nodemailer

This setup uses Node.js with Express and Nodemailer to handle contact form submissions and send emails to your Gmail address.

### 📋 Prerequisites

1. **Node.js** installed on your computer
2. **Gmail account** with 2-factor authentication enabled
3. **Gmail App Password** (we'll generate this)

### 🔧 Setup Steps

#### 1. Install Dependencies
```bash
npm install
```

#### 2. Generate Gmail App Password

1. **Go to your Google Account settings**
   - Visit: https://myaccount.google.com/
   - Click on "Security"

2. **Enable 2-Step Verification** (if not already enabled)
   - Find "2-Step Verification" and enable it

3. **Generate App Password**
   - Go to "App passwords" (under 2-Step Verification)
   - Select "Mail" and "Other (Custom name)"
   - Name it "GATT Website"
   - Copy the generated 16-character password

#### 3. Configure Email Settings

Edit `server.js` and replace the email configuration:

```javascript
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: 'graciousangeli.santaigo@gmail.com', // Your Gmail address
        pass: 'your-16-character-app-password' // Replace with your App Password
    }
});
```

#### 4. Start the Server

**Development mode (with auto-restart):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:3000`

### 📧 How It Works

1. **User fills out contact form** on your website
2. **Form data is sent** to `/api/contact` endpoint
3. **Node.js server** receives the data and validates it
4. **Nodemailer** sends a beautifully formatted email to your Gmail
5. **User gets confirmation** message on the website

### 🎨 Email Format

The emails you receive will have:
- **Professional HTML formatting** with your brand colors
- **Contact information** (name, email)
- **Subject and message** clearly organized
- **Timestamp** in Philippine timezone
- **GATT branding** and styling

### 🔒 Security Features

- **Input validation** - all fields required
- **CORS enabled** - secure cross-origin requests
- **Error handling** - graceful error messages
- **Rate limiting** - prevents spam (can be added)

### 🌐 Deployment Options

**Local Development:**
- Run `npm run dev` for development
- Access at `http://localhost:3000`

**Production Deployment:**
- Deploy to services like:
  - **Heroku** (free tier available)
  - **Railway** (free tier available)
  - **Render** (free tier available)
  - **Vercel** (free tier available)

### 🛠️ Customization

**Change email template:**
- Edit the HTML template in `server.js`
- Modify colors, layout, and branding

**Add more features:**
- Email notifications to multiple addresses
- Save submissions to database
- Add CAPTCHA protection
- Implement rate limiting

### 📞 Support

If you need help with setup or deployment, the Node.js backend provides:
- **Reliable email delivery**
- **Professional formatting**
- **Easy customization**
- **Better security** than client-side solutions

### 🎯 Benefits Over EmailJS

- **No third-party dependencies** for email sending
- **Full control** over email formatting and delivery
- **Better security** - credentials stay on your server
- **More reliable** - direct SMTP connection
- **Cost-effective** - no monthly fees
- **Customizable** - full control over the backend
