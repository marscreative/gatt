const nodemailer = require('nodemailer');

// Create transporter for Gmail
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'graciousangeli.santaigo@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-app-password'
    }
});

module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ 
            success: false, 
            message: 'Method not allowed' 
        });
    }

    try {
        const { name, email, subject, message } = req.body;

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ 
                success: false, 
                message: 'All fields are required' 
            });
        }

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER || 'graciousangeli.santaigo@gmail.com',
            to: process.env.EMAIL_USER || 'graciousangeli.santaigo@gmail.com',
            subject: `GATT Contact Form: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
                        <h1 style="margin: 0; font-size: 24px;">🎯 New Contact Form Submission</h1>
                        <p style="margin: 10px 0 0 0; opacity: 0.9;">Gracious Angeli Travel & Tours</p>
                    </div>
                    
                    <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
                        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #667eea;">
                            <h2 style="color: #333; margin-top: 0; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
                                📋 Contact Information
                            </h2>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                                <div>
                                    <strong style="color: #667eea;">👤 Name:</strong><br>
                                    <span style="color: #555;">${name}</span>
                                </div>
                                <div>
                                    <strong style="color: #667eea;">📧 Email:</strong><br>
                                    <span style="color: #555;">${email}</span>
                                </div>
                            </div>
                        </div>
                        
                        <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #28a745;">
                            <h3 style="color: #333; margin-top: 0; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
                                📝 Subject
                            </h3>
                            <p style="color: #555; margin: 0; font-size: 16px;">${subject}</p>
                        </div>
                        
                        <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107;">
                            <h3 style="color: #333; margin-top: 0; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
                                💬 Message
                            </h3>
                            <div style="color: #555; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                        </div>
                        
                        <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #2196f3;">
                            <p style="margin: 0; color: #1976d2; font-size: 14px;">
                                <strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-US', { 
                                    timeZone: 'Asia/Manila',
                                    year: 'numeric', 
                                    month: 'long', 
                                    day: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </p>
                        </div>
                    </div>
                    
                    <div style="text-align: center; margin-top: 20px; color: #666; font-size: 12px;">
                        <p>This message was sent from the GATT website contact form.</p>
                        <p>© 2025 Gracious Angeli Travel & Tours</p>
                    </div>
                </div>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ 
            success: true, 
            message: 'Message sent successfully!' 
        });

    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to send message. Please try again.' 
        });
    }
};
