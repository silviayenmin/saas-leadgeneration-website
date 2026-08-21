import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import './sections.css';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  // Closed by default, single open item logic
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      question: 'Do I need a Google Maps API Key or billing account?',
      answer:
        'No. MapFlow AI uses an automated Playwright Chromium engine to retrieve live Google Maps business data directly.'
    },
    {
      question: 'How accurate is the website email scraper?',
      answer:
        "MapFlow AI's deep web crawler parses company websites to locate business emails, contact information, LinkedIn profiles, and Instagram handles."
    },
    {
      question: 'What happens if I run out of monthly credits?',
      answer:
        'You can upgrade your plan or purchase additional credit packs from your dashboard.'
    },
    {
      question: 'Can I export leads to CSV or my existing CRM?',
      answer:
        'Yes. MapFlow AI supports CSV/JSON exports and webhook integrations.'
    },
    {
      question: 'Is there a free trial?',
      answer:
        'Yes. Sign up and receive 25 free credits without a credit card.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="section-wrapper faq-wrapper">
      {/* Background Glow */}
      <div className="faq-bg-glow" />

      <Container size="md">
        {/* Section Heading */}
        <SectionHeading
          badge="GOT QUESTIONS?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about MapFlow AI lead discovery, enrichment, and pricing."
          align="center"
        />

        {/* Accordion Container */}
        <div className="faq-accordion-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-accordion-item ${isOpen ? 'faq-item--open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-trigger-btn"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon-box">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className="faq-answer-collapse"
                  style={{
                    maxHeight: isOpen ? '240px' : '0px',
                    opacity: isOpen ? 1 : 0
                  }}
                >
                  <div className="faq-answer-inner">
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Subtext */}
        <div className="faq-footer-note">
          <HelpCircle size={16} className="text-cyan" />
          <span>Still have questions? Chat with our live support team 24/7.</span>
        </div>
      </Container>
    </section>
  );
};
