import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  CreditCard,
  Building2,
  MapPin,
  Loader2,
  AlertCircle,
  Eye
} from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import { CustomSelect } from '../ui/CustomSelect';
import { Modal } from '../ui/Modal';
import { ContactFormData, SubjectOption, FormErrors } from '../../types/contact';
import { submitContactForm, ADMIN_EMAIL } from '../../services/contactService';
import './sections.css';

const SUBJECT_OPTIONS: SubjectOption[] = [
  'General Inquiry',
  'Product Question',
  'Pricing',
  'Partnership',
  'Technical Question',
  'Other'
];

const INITIAL_FORM_DATA: ContactFormData = {
  fullName: '',
  email: '',
  phone: '',
  company: '',
  subject: '',
  message: ''
};

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [submittedHtmlPreview, setSubmittedHtmlPreview] = useState<string | null>(null);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  // Email format validation helper
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  };

  // Validate all fields or individual field
  const validate = (data: ContactFormData): FormErrors => {
    const newErrors: FormErrors = {};

    if (!data.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Work email is required.';
    } else if (!isValidEmail(data.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!data.subject) {
      newErrors.subject = 'Please select a subject.';
    }

    if (!data.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'Please enter at least 10 characters.';
    }

    return newErrors;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const nextFormData = {
        ...prev,
        [name]: value
      };

      if (touched[name]) {
        const fieldErrors = validate(nextFormData);
        setErrors((prevErr) => ({
          ...prevErr,
          [name]: fieldErrors[name as keyof FormErrors]
        }));
      }

      return nextFormData;
    });
  };

  const handleSubjectChange = (val: string) => {
    setFormData((prev) => ({
      ...prev,
      subject: val
    }));

    setTouched((prev) => ({ ...prev, subject: true }));

    if (val) {
      setErrors((prevErr) => {
        const updated = { ...prevErr };
        delete updated.subject;
        return updated;
      });
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setFormData((currentFormData) => {
      const currentErrors = validate(currentFormData);
      setErrors((prevErr) => ({
        ...prevErr,
        [field]: currentErrors[field as keyof FormErrors]
      }));
      return currentFormData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);

    // Mark all fields as touched
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      subject: true,
      message: true
    });

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await submitContactForm(formData);
      if (response.success) {
        setIsSuccess(true);
        setSubmittedHtmlPreview(response.htmlPreview || null);
        setFormData(INITIAL_FORM_DATA);
        setTouched({});
        setErrors({});

        // Automatically revert the button state back after 4 seconds
        setTimeout(() => {
          setIsSuccess(false);
        }, 4000);
      } else {
        setApiError('Something went wrong. Please try again.');
      }
    } catch {
      setApiError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper contact-wrapper">
      {/* Ambient Radial Background Glow */}
      <div className="contact-bg-glow" />

      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Talk About Your Lead Generation"
          subtitle="Have questions about MapFlow AI, need help choosing a plan, or want to discuss how it can fit your sales workflow? Send us a message."
          align="center"
        />

        {/* Two-Column Grid */}
        <div className="contact-grid">
          {/* LEFT SIDE: Information Panel & MapFlow Visuals */}
          <div className="contact-info-panel reveal-fade-left">
            <div className="info-panel-head">
              <span className="info-badge">
                <Sparkles size={14} className="text-cyan" />
                <span>DIRECT SUPPORT &amp; INQUIRIES</span>
              </span>
              <h3 className="info-title">Let's Build Your Lead Engine</h3>
              <p className="info-description">
                Whether you're an agency, freelancer, sales team, or SaaS business, we're here to help you get more value from MapFlow AI.
              </p>
            </div>

            {/* Three Benefits */}
            <div className="contact-benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon-box icon-box--teal">
                  <HelpCircle size={20} />
                </div>
                <div className="benefit-content">
                  <h4 className="benefit-title">Product Questions</h4>
                  <p className="benefit-text">
                    Get help understanding MapFlow AI features and workflows.
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon-box icon-box--cyan">
                  <CreditCard size={20} />
                </div>
                <div className="benefit-content">
                  <h4 className="benefit-title">Plan &amp; Pricing</h4>
                  <p className="benefit-text">
                    Need help choosing the right plan for your lead volume?
                  </p>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon-box icon-box--purple">
                  <Building2 size={20} />
                </div>
                <div className="benefit-content">
                  <h4 className="benefit-title">Partnership &amp; Business</h4>
                  <p className="benefit-text">
                    Interested in partnerships, integrations, or business opportunities?
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative MapFlow UI Radar Grid & Live Pin Element */}
            <div className="contact-visual-card">
              <div className="contact-radar-grid">
                <div className="radar-node node-1">
                  <MapPin size={16} color="#0EA5A4" />
                  <span className="node-tooltip">Austin, TX • Verified</span>
                </div>
                <div className="radar-node node-2">
                  <MapPin size={16} color="#34D399" />
                  <span className="node-tooltip">Dallas, TX • Active</span>
                </div>
                <div className="radar-node node-3">
                  <MapPin size={16} color="#C084FC" />
                  <span className="node-tooltip">Miami, FL • Enriched</span>
                </div>
                <div className="radar-lead-chip">
                  <CheckCircle2 size={13} color="#22C55E" />
                  <span>400+ Verified Leads Scanned</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Glassmorphism Form Card */}
          <GlassCard className="contact-form-card reveal-fade-right" padding="lg">
            <form onSubmit={handleSubmit} noValidate className="contact-form">
              {/* Success Notification Banner */}
              {isSuccess && (
                <div
                  className="form-alert form-alert--success"
                  role="status"
                  style={{
                    background: 'rgba(34, 197, 94, 0.14)',
                    border: '1px solid rgba(34, 197, 94, 0.4)',
                    color: '#22C55E',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    animation: 'fadeIn 0.4s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={18} color="#22C55E" />
                    <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                      Inquiry sent to <strong>{ADMIN_EMAIL}</strong>! Form reset.
                    </span>
                  </div>
                  {submittedHtmlPreview && (
                    <button
                      type="button"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
                        padding: '5px 12px',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        whiteSpace: 'nowrap'
                      }}
                      onClick={() => setIsPreviewModalOpen(true)}
                    >
                      <Eye size={14} />
                      <span>Preview Email</span>
                    </button>
                  )}
                </div>
              )}

              {apiError && (
                <div className="form-alert form-alert--error" role="alert">
                  <AlertCircle size={18} />
                  <span>{apiError}</span>
                </div>
              )}

                {/* Field: Full Name */}
                <div className={`form-group ${errors.fullName ? 'has-error' : ''}`}>
                  <label htmlFor="fullName" className="form-label">
                    Full Name <span className="required-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('fullName')}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    disabled={isSubmitting}
                  />
                  {errors.fullName && (
                    <span id="fullName-error" className="form-error-msg" role="alert">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Field: Work Email */}
                <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                  <label htmlFor="email" className="form-label">
                    Work Email <span className="required-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('email')}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span id="email-error" className="form-error-msg" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Field: Phone Number */}
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number <span className="optional-tag">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone || ''}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>

                {/* Field: Company Name (Optional) */}
                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    Company Name <span className="optional-tag">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-input"
                    placeholder="Your company"
                    value={formData.company}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </div>

                {/* Field: Subject Modern Custom Dropdown */}
                <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                  <label htmlFor="subject" className="form-label">
                    Subject <span className="required-star">*</span>
                  </label>
                  <CustomSelect
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    options={SUBJECT_OPTIONS}
                    placeholder="Select a subject..."
                    onChange={handleSubjectChange}
                    onBlur={() => handleBlur('subject')}
                    disabled={isSubmitting}
                    hasError={Boolean(errors.subject)}
                    aria-invalid={Boolean(errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <span id="subject-error" className="form-error-msg" role="alert">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Field: Message */}
                <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                  <label htmlFor="message" className="form-label">
                    Message <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows={4}
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('message')}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <span id="message-error" className="form-error-msg" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Primary Button */}
                <button
                  type="submit"
                  className={`ui-button ui-button--lg ui-button--full submit-btn ${
                    isSuccess ? 'ui-button--success-state' : 'ui-button--primary'
                  }`}
                  disabled={isSubmitting}
                  style={
                    isSuccess
                      ? {
                          background: '#22C55E',
                          borderColor: '#22C55E',
                          color: '#ffffff',
                          boxShadow: '0 4px 18px rgba(34, 197, 94, 0.4)'
                        }
                      : undefined
                  }
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="spinner-icon" />
                      <span>Sending to Admin...</span>
                    </>
                  ) : isSuccess ? (
                    <>
                      <CheckCircle2 size={18} color="#FFFFFF" />
                      <span>Message Sent Successfully! ✓</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
          </GlassCard>
        </div>
      </Container>

      {/* Admin Email Modern UI Preview Modal */}
      {submittedHtmlPreview && (
        <Modal
          isOpen={isPreviewModalOpen}
          onClose={() => setIsPreviewModalOpen(false)}
          title={`📧 Admin HTML Email Preview (${ADMIN_EMAIL})`}
        >
          <div className="email-preview-wrapper">
            <div className="email-preview-meta">
              <div className="meta-row">
                <span className="meta-label">To Admin:</span>
                <span className="meta-val">{ADMIN_EMAIL}</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Status:</span>
                <span className="meta-badge">Formatted &amp; Dispatched</span>
              </div>
            </div>
            <iframe
              title="Admin Email UI Preview"
              srcDoc={submittedHtmlPreview}
              className="email-preview-iframe"
            />
          </div>
        </Modal>
      )}
    </section>
  );
};


