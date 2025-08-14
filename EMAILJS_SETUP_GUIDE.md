# EmailJS Setup Guide for Gracious Angeli Travel & Tours

## Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up with your Gmail account
3. Verify your email

### 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add Service"
3. Choose "Gmail"
4. Follow the authentication process with your Gmail account
5. Note your **Service ID** (e.g., "service_abcd123")

### 3. Create Email Templates

#### Template 1: Contact Form
1. Go to "Email Templates" → "Create New Template"
2. Template ID: `contact_form`
3. Subject: `New Contact Inquiry - {{subject}}`
4. Content:
```
Hello,

You have received a new contact inquiry from your website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Best regards,
Website Contact Form
```

#### Template 2: Survey Form
1. Create another template with ID: `survey_feedback`
2. Subject: `Customer Feedback Survey`
3. Content:
```
New customer feedback received:

Booking Ease: {{booking_ease}}
Information Clarity: {{information_clarity}}
Value for Money: {{value_money}}
Experience Level: {{experience}}

Suggestions for Improvement:
{{improvements}}

Submitted: {{timestamp}}
```

### 4. Update Your Code

Replace the following in `assets/script.js`:

```javascript
// Replace these with your actual values
emailjs.init("YOUR_PUBLIC_KEY");           // Your EmailJS Public Key
'YOUR_SERVICE_ID'                          // Your Gmail Service ID
'YOUR_TEMPLATE_ID'                         // contact_form
'YOUR_SURVEY_TEMPLATE_ID'                  // survey_feedback
'your-email@gmail.com'                     // Your actual Gmail address
```

### 5. Get Your Public Key
1. In EmailJS dashboard, go to "Account" → "API Keys"
2. Copy your Public Key
3. Replace `YOUR_PUBLIC_KEY` in the code

### 6. Test Your Forms
1. Open your website
2. Fill out the contact form
3. Check your Gmail for the email
4. Test the survey form as well

## Security Notes
- EmailJS Public Key is safe to expose in frontend code
- No backend server required
- Gmail credentials are handled securely by EmailJS
- Rate limiting: 200 emails/month (free tier)

## Troubleshooting
- If emails don't arrive, check your Gmail spam folder
- Verify all IDs match exactly (case-sensitive)
- Check browser console for error messages
- Ensure Gmail service is properly connected in EmailJS dashboard

## Upgrade Options
- Free: 200 emails/month
- Paid plans: Start at $20/month for 10,000 emails
- Perfect for your current needs, can upgrade as business grows
