import { ContactFormData } from '../types/contact';

/**
 * Generates a modern, responsive HTML email template for LeadGen AI contact form inquiries.
 * Designed with premium glassmorphism accents, brand typography, inline button styles, and interactive CTAs.
 */
export const generateEmailHtml = (formData: ContactFormData): string => {
  const formattedDate = new Date().toLocaleString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  const phoneDisplay = formData.phone?.trim() ? formData.phone.trim() : 'Not provided';
  const companyDisplay = formData.company?.trim() ? formData.company.trim() : 'Not specified';
  const firstName = formData.fullName.split(' ')[0] || formData.fullName;

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Lead Inquiry - LeadGen AI</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #090D16;
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #E2E8F0;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      table-layout: fixed;
      background-color: #090D16;
      padding: 40px 10px;
    }
    .main-card {
      max-width: 600px;
      margin: 0 auto;
      background-color: #0E1626;
      border: 1px solid rgba(14, 165, 164, 0.35);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(3, 113, 114, 0.2);
    }
    .header {
      background: linear-gradient(135deg, #037172 0%, #0EA5A4 100%);
      padding: 32px 24px;
      text-align: center;
    }
    .header-logo {
      font-size: 24px;
      font-weight: 800;
      color: #FFFFFF;
      letter-spacing: -0.02em;
      text-decoration: none;
    }
    .header-tag {
      display: inline-block;
      margin-top: 10px;
      background: rgba(255, 255, 255, 0.2);
      color: #FFFFFF;
      padding: 4px 14px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .content {
      padding: 32px 28px;
    }
    .section-title {
      font-size: 18px;
      font-weight: 700;
      color: #F8FAFC;
      margin-top: 0;
      margin-bottom: 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 10px;
    }
    .info-table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 28px;
    }
    .info-table td {
      padding: 12px 14px;
      font-size: 14px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .info-label {
      color: #94A3B8;
      font-weight: 600;
      width: 35%;
    }
    .info-value {
      color: #F1F5F9;
      font-weight: 500;
    }
    .info-value a {
      color: #38BDF8;
      text-decoration: none;
    }
    .badge-subject {
      display: inline-block;
      background: rgba(14, 165, 164, 0.18);
      color: #38BDF8;
      border: 1px solid rgba(14, 165, 164, 0.4);
      padding: 4px 12px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 12px;
    }
    .message-box {
      background: #090F1C;
      border-left: 4px solid #0EA5A4;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      border-right: 1px solid rgba(255, 255, 255, 0.06);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 28px;
    }
    .message-title {
      font-size: 13px;
      font-weight: 700;
      color: #0EA5A4;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 0 0 10px 0;
    }
    .message-body {
      font-size: 14px;
      line-height: 1.6;
      color: #CBD5E1;
      white-space: pre-wrap;
      margin: 0;
    }
    .footer {
      background-color: #080C16;
      padding: 20px 24px;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      font-size: 12px;
      color: #64748B;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="main-card">
      <div class="header">
        <div class="header-logo">⚡ LeadGen AI</div>
        <div class="header-tag">NEW LEAD INQUIRY</div>
      </div>

      <div class="content">
        <h2 class="section-title">Contact Form Submission Details</h2>
        
        <table class="info-table">
          <tr>
            <td class="info-label">Full Name</td>
            <td class="info-value"><strong>${escapeHtml(formData.fullName)}</strong></td>
          </tr>
          <tr>
            <td class="info-label">Work Email</td>
            <td class="info-value">
              <a href="mailto:${escapeHtml(formData.email)}" style="color: #38BDF8; font-weight: 600; text-decoration: none;">${escapeHtml(formData.email)}</a>
            </td>
          </tr>
          <tr>
            <td class="info-label">Phone Number</td>
            <td class="info-value">${escapeHtml(phoneDisplay)}</td>
          </tr>
          <tr>
            <td class="info-label">Company Name</td>
            <td class="info-value">${escapeHtml(companyDisplay)}</td>
          </tr>
          <tr>
            <td class="info-label">Subject</td>
            <td class="info-value">
              <span class="badge-subject">${escapeHtml(formData.subject)}</span>
            </td>
          </tr>
          <tr>
            <td class="info-label">Submission Date</td>
            <td class="info-value">${formattedDate}</td>
          </tr>
        </table>

        <div class="message-box">
          <div class="message-title">💬 Message Content</div>
          <p class="message-body">${escapeHtml(formData.message)}</p>
        </div>

        <!-- ENHANCED ACTION BUTTONS BAR -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 24px;">
          <tr>
            <td align="center">
              <a href="mailto:${escapeHtml(formData.email)}?subject=Re: ${encodeURIComponent(formData.subject)} - LeadGen AI"
                 style="display: inline-block; background: linear-gradient(135deg, #0EA5A4 0%, #037172 100%); color: #FFFFFF !important; text-decoration: none !important; font-weight: 700; font-size: 14px; padding: 14px 28px; border-radius: 8px; box-shadow: 0 4px 16px rgba(14, 165, 164, 0.4); margin: 6px; letter-spacing: 0.02em;">
                ✉️ &nbsp;Reply to ${escapeHtml(firstName)}
              </a>
              ${formData.phone?.trim() && formData.phone.trim() !== 'N/A' ? `
              <a href="tel:${escapeHtml(formData.phone.trim())}"
                 style="display: inline-block; background: #162238; color: #38BDF8 !important; border: 1px solid rgba(56, 189, 248, 0.4); text-decoration: none !important; font-weight: 700; font-size: 14px; padding: 13px 24px; border-radius: 8px; margin: 6px; letter-spacing: 0.02em;">
                📞 &nbsp;Call Prospect (${escapeHtml(formData.phone.trim())})
              </a>
              ` : ''}
            </td>
          </tr>
        </table>
      </div>

      <div class="footer">
        <p>This automated inquiry notification was dispatched to <strong>madhusudhanan.yenmin@gmail.com</strong> by LeadGen AI Lead Generation Engine.</p>
        <p>© ${new Date().getFullYear()} LeadGen AI. All rights reserved.</p>
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();
};

/**
 * Escapes HTML characters to prevent XSS in email preview / templates.
 */
const escapeHtml = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};
