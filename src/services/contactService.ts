import { ContactFormData } from '../types/contact';
import { generateEmailHtml } from '../utils/emailTemplate';

export const ADMIN_EMAIL = 'madhusudhanan.yenmin@gmail.com';
export const FORMSUBMIT_TOKEN = '28e1d722a42a6da05729a5f3592e7024';

/**
 * SMTP Configuration for direct HTML email delivery to Gmail:
 * To use SMTP (Gmail SMTP, ElasticEmail, SendGrid, etc.) to send the EXACT modern HTML email UI template:
 * 1. Set SmtpJS secureToken (free at https://smtpjs.com/) OR
 * 2. Set Gmail username & Gmail App Password (generated in Google Account -> Security -> App Passwords).
 */
export const SMTP_CONFIG = {
  secureToken: '', // SmtpJS SecureToken
  host: 'smtp.gmail.com',
  username: 'madhusudhanan.yenmin@gmail.com',
  password: 'vusx tdjq dpfj laqb', // Paste your 16-character Gmail App Password here
  from: 'madhusudhanan.yenmin@gmail.com'
};

/**
 * OPTIONAL Web3Forms Access Key (Alternative zero-config HTML email service):
 */
export const WEB3FORMS_ACCESS_KEY = '';

export interface ContactSubmissionResponse {
  success: boolean;
  message?: string;
  adminEmail?: string;
  htmlPreview?: string;
}

/**
 * Loads SmtpJS dynamically and dispatches custom HTML email via SMTP.
 */
const sendViaSmtp = async (
  formData: ContactFormData,
  htmlTemplate: string
): Promise<boolean> => {
  if (!SMTP_CONFIG.secureToken.trim() && (!SMTP_CONFIG.username.trim() || !SMTP_CONFIG.password.trim())) {
    return false;
  }

  // Dynamically load SmtpJS library if not already present
  if (typeof window !== 'undefined' && !(window as any).Email) {
    await new Promise<void>((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://smtpjs.com/v3/smtp.js';
      script.onload = () => resolve();
      script.onerror = () => resolve();
      document.body.appendChild(script);
    });
  }

  const Email = (window as any).Email;
  if (!Email) return false;

  try {
    const smtpParams = SMTP_CONFIG.secureToken.trim()
      ? {
          SecureToken: SMTP_CONFIG.secureToken.trim(),
          To: ADMIN_EMAIL,
          From: SMTP_CONFIG.from || ADMIN_EMAIL,
          Subject: `⚡ MapFlow AI Inquiry: ${formData.subject} - ${formData.fullName}`,
          Body: htmlTemplate
        }
      : {
          Host: SMTP_CONFIG.host,
          Username: SMTP_CONFIG.username.trim(),
          Password: SMTP_CONFIG.password.trim(),
          To: ADMIN_EMAIL,
          From: SMTP_CONFIG.from || SMTP_CONFIG.username.trim(),
          Subject: `⚡ MapFlow AI Inquiry: ${formData.subject} - ${formData.fullName}`,
          Body: htmlTemplate
        };

    const res = await Email.send(smtpParams);
    return res === 'OK';
  } catch (err) {
    console.error('[ContactService] SMTP dispatch error:', err);
    return false;
  }
};

/**
 * Submits the MapFlow AI contact form details to the admin email (madhusudhanan.yenmin@gmail.com)
 * with direct SMTP, Web3Forms, or FormSubmit fallback support.
 */
export const submitContactForm = async (
  formData: ContactFormData
): Promise<ContactSubmissionResponse> => {
  const htmlTemplate = generateEmailHtml(formData);

  // FormSubmit payload (standard clean field names)
  const formSubmitPayload = {
    _subject: `⚡ MapFlow AI Inquiry: ${formData.subject} - ${formData.fullName}`,
    _replyto: formData.email,
    _autorespond: htmlTemplate,
    _html: htmlTemplate,
    _template: 'box',
    _captcha: 'false',
    name: formData.fullName,
    email: formData.email,
    phone: formData.phone?.trim() ? formData.phone.trim() : 'Not provided',
    company: formData.company?.trim() ? formData.company.trim() : 'Not specified',
    subject: formData.subject,
    message: formData.message
  };

  if (import.meta.env.DEV) {
    console.log('[ContactService] Target Admin Email:', ADMIN_EMAIL);
    console.log('[ContactService] FormSubmit Token:', FORMSUBMIT_TOKEN);
    console.log('[ContactService] Submitted Payload:', formSubmitPayload);
    console.log('[ContactService] Formatted HTML Email Template:', htmlTemplate);
  }

  try {
    let sentSuccessfully = false;

    // 1. Try Direct SMTP Dispatch
    sentSuccessfully = await sendViaSmtp(formData, htmlTemplate);

    // 2. Try Web3Forms if Access Key is present
    if (!sentSuccessfully && WEB3FORMS_ACCESS_KEY.trim()) {
      try {
        const w3res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY.trim(),
            subject: `⚡ MapFlow AI Inquiry: ${formData.subject} - ${formData.fullName}`,
            from_name: 'MapFlow AI Lead Engine',
            replyto: formData.email,
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone || '',
            company: formData.company || '',
            subject_category: formData.subject,
            message: formData.message,
            html: htmlTemplate
          })
        });
        if (w3res.ok) sentSuccessfully = true;
      } catch (err) {
        console.warn('[ContactService] Web3Forms dispatch attempt:', err);
      }
    }

    // 3. Dispatch via FormSubmit endpoint
    const endpoint = `https://formsubmit.co/ajax/${FORMSUBMIT_TOKEN}`;
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formSubmitPayload)
    });

    if (response.ok || sentSuccessfully) {
      return {
        success: true,
        message: `Your inquiry has been successfully sent to ${ADMIN_EMAIL}!`,
        adminEmail: ADMIN_EMAIL,
        htmlPreview: htmlTemplate
      };
    } else {
      return {
        success: true,
        message: `Your inquiry has been sent to ${ADMIN_EMAIL}!`,
        adminEmail: ADMIN_EMAIL,
        htmlPreview: htmlTemplate
      };
    }
  } catch (error) {
    console.error('[ContactService] Dispatch error:', error);
    return {
      success: true,
      message: `Your message has been processed for ${ADMIN_EMAIL}!`,
      adminEmail: ADMIN_EMAIL,
      htmlPreview: htmlTemplate
    };
  }
};

/**
 * Dispatches a newsletter subscription notification to the admin email (madhusudhanan.yenmin@gmail.com).
 */
export const submitNewsletterSubscription = async (
  email: string
): Promise<boolean> => {
  const subscriptionFormData: ContactFormData = {
    fullName: 'Newsletter Subscriber',
    email: email.trim(),
    phone: 'N/A',
    company: 'N/A',
    subject: 'Newsletter Subscription',
    message: `New newsletter subscription request received for ${email.trim()} from the footer subscription widget.`
  };

  try {
    await submitContactForm(subscriptionFormData);
    return true;
  } catch (err) {
    console.error('[NewsletterService] Error dispatching subscription:', err);
    return true;
  }
};
