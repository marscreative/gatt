# 🚀 Vercel Deployment Guide for GATT Website

## Deploy Your Node.js Backend to Vercel

This guide will help you deploy your GATT website with the Node.js backend to Vercel, making your contact form fully functional.

### 📋 Prerequisites

1. **GitHub account** with your GATT repository
2. **Vercel account** (free tier available)
3. **Gmail App Password** (already generated)

### 🔧 Step-by-Step Deployment

#### 1. Prepare Your Repository

Make sure your repository has these files:
- ✅ `server.js` - Node.js backend
- ✅ `package.json` - Dependencies
- ✅ `vercel.json` - Vercel configuration
- ✅ `index.html` - Your website
- ✅ `assets/` - CSS and JS files

#### 2. Generate Gmail App Password

If you haven't already:

1. **Go to Google Account settings**: https://myaccount.google.com/
2. **Enable 2-Step Verification** (if not enabled)
3. **Generate App Password**:
   - Go to "Security" → "2-Step Verification" → "App passwords"
   - Select "Mail" and "Other (Custom name)"
   - Name it "GATT Website Vercel"
   - Copy the 16-character password

#### 3. Deploy to Vercel

**Option A: Deploy via Vercel Dashboard**

1. **Visit Vercel**: https://vercel.com/
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your GATT repository** from GitHub
5. **Configure project settings**:
   - Framework Preset: `Node.js`
   - Root Directory: `./` (leave as default)
   - Build Command: `npm install` (leave as default)
   - Output Directory: `./` (leave as default)
6. **Click "Deploy"**

**Option B: Deploy via Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
vercel

# Follow the prompts to link to your GitHub repo
```

#### 4. Configure Environment Variables

After deployment, set up your email credentials:

1. **Go to your Vercel project dashboard**
2. **Click "Settings" tab**
3. **Go to "Environment Variables"**
4. **Add these variables**:

```
NAME: EMAIL_USER
VALUE: graciousangeli.santaigo@gmail.com
ENVIRONMENT: Production

NAME: EMAIL_PASS
VALUE: your-16-character-app-password
ENVIRONMENT: Production
```

5. **Click "Save"**
6. **Redeploy** your project (Vercel will automatically redeploy)

#### 5. Test Your Deployment

1. **Visit your Vercel URL** (e.g., `https://gatt-website.vercel.app`)
2. **Navigate to the Contact tab**
3. **Fill out the contact form**
4. **Submit and check your email**

### 🌐 Your Live Website

After deployment, you'll have:
- **Live website**: `https://your-project-name.vercel.app`
- **Functional contact form** that sends emails to your Gmail
- **Professional email formatting** with GATT branding
- **Automatic HTTPS** and CDN

### 🔧 Custom Domain (Optional)

To use your own domain:

1. **Go to Vercel project settings**
2. **Click "Domains"**
3. **Add your custom domain** (e.g., `www.graciousangeli.com`)
4. **Update DNS records** as instructed by Vercel

### 📧 Email Testing

Test your contact form by:

1. **Fill out the form** with test data
2. **Submit the form**
3. **Check your Gmail** for the formatted email
4. **Verify all information** is correct

### 🛠️ Troubleshooting

**If emails aren't sending:**

1. **Check environment variables** in Vercel dashboard
2. **Verify Gmail App Password** is correct
3. **Check Vercel function logs** for errors
4. **Ensure 2-Step Verification** is enabled on Gmail

**If website isn't loading:**

1. **Check Vercel deployment status**
2. **Verify all files** are in the repository
3. **Check `vercel.json`** configuration
4. **Review build logs** for errors

### 🔄 Updates and Maintenance

**To update your website:**

1. **Make changes** to your local files
2. **Commit and push** to GitHub
3. **Vercel automatically redeploys** (if connected)
4. **Or manually redeploy** from Vercel dashboard

**To update environment variables:**

1. **Go to Vercel project settings**
2. **Update environment variables**
3. **Redeploy** the project

### 📊 Vercel Features You Get

- **Automatic HTTPS** - Secure connections
- **Global CDN** - Fast loading worldwide
- **Automatic deployments** - Updates on Git push
- **Function logs** - Debug your backend
- **Analytics** - Track website performance
- **Preview deployments** - Test changes before going live

### 🎯 Benefits of Vercel Deployment

- **Free tier** - No cost for basic hosting
- **Serverless functions** - Perfect for contact forms
- **Automatic scaling** - Handles traffic spikes
- **Easy deployment** - One-click setup
- **Professional hosting** - Reliable and fast

### 📞 Support

If you encounter issues:

1. **Check Vercel documentation**: https://vercel.com/docs
2. **Review function logs** in Vercel dashboard
3. **Test locally** with `npm run dev`
4. **Verify environment variables** are set correctly

Your GATT website will be live and fully functional with a professional contact form! 🚀✨
