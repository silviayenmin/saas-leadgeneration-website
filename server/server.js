import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Create Nodemailer Transporter with user's Gmail App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'madhusudhanan.yenmin@gmail.com',
    pass: 'vusx tdjq dpfj laqb'
  }
});

// Verify SMTP connection on startup
transporter.verify((error) => {
  if (error) {
    console.error('❌ [Gmail SMTP Connection Error]:', error);
  } else {
    console.log('🟢 [Gmail Direct SMTP Server Ready] Connected to smtp.gmail.com');
  }
});

// Endpoint to dispatch custom HTML email template directly to Gmail
app.post('/api/contact', async (req, res) => {
  try {
    const { fullName, email, subject, htmlTemplate } = req.body;

    const mailOptions = {
      from: `"MapFlow AI Lead Engine" <madhusudhanan.yenmin@gmail.com>`,
      to: 'madhusudhanan.yenmin@gmail.com',
      replyTo: email,
      subject: `⚡ MapFlow AI Inquiry: ${subject || 'General Inquiry'} - ${fullName || 'Lead'}`,
      html: htmlTemplate
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('✅ [HTML Email Dispatched to Gmail]:', info.messageId);

    return res.status(200).json({
      success: true,
      message: 'Email successfully delivered to madhusudhanan.yenmin@gmail.com via Gmail SMTP',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('❌ [Gmail Email Dispatch Failed]:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to send email via SMTP backend',
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 [MapFlow AI Backend Server] Running on http://localhost:${PORT}`);
});
