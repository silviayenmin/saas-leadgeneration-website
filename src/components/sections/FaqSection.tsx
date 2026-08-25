import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
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
      question: 'Do I need any technical setup or technical knowledge to start?',
      answer:
        'No. MapFlow AI requires zero technical setup. Simply enter your target business type and location to start finding verified local business leads in seconds.'
    },
    {
      question: 'How accurate is the website email scraper?',
      answer:
        "MapFlow AI's deep web search parses company websites to locate direct business owner emails, phone numbers, LinkedIn profiles, and verified contact info."
    },
    {
      question: 'What happens if I run out of monthly credits?',
      answer:
        'You can upgrade your plan or purchase additional lead credit packages directly from your dashboard anytime.'
    },
    {
      question: 'Can I export leads to CSV or my existing CRM?',
      answer:
        'Yes. MapFlow AI supports 1-click CSV file downloads and seamless exports to keep your sales workflow organized.'
    },
    {
      question: 'Is there a free trial to test MapFlow AI?',
      answer:
        'Yes. Sign up today and receive 25 free lead credits immediately without requiring a credit card.'
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
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 80}
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
      </Container>
    </section>
  );
};
