import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassCard } from '../ui/GlassCard';
import './sections.css';

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  quote: string;
  rating: number;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      id: 'marcus',
      name: 'Marcus Vance',
      role: 'Founder',
      company: 'Vance Media Agency',
      initials: 'MV',
      quote:
        'LeadGen AI replaced two expensive tools for us. We scraped 400 local HVAC leads in Dallas and generated personalized AI emails in 15 minutes. Closed 3 new monthly retainer clients ($4,500/mo) in our first week!',
      rating: 5
    },
    {
      id: 'priya',
      name: 'Priya Sharma',
      role: 'Lead Gen Consultant',
      company: 'Independent Consulting',
      initials: 'PS',
      quote:
        'The website email enrichment is super accurate. Instead of sending emails to generic info@ addresses, LeadGen gets direct emails and social links. The automated email pitch generator is fast like lightning!',
      rating: 5
    },
    {
      id: 'david',
      name: 'David Miller',
      role: 'Founder',
      company: 'LocalRank Pro',
      initials: 'DM',
      quote:
        'We saved over 20 hours of manual prospecting every week. The built-in CRM board keeps our sales reps organized without needing external CRM tools.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section-wrapper testimonials-wrapper">
      {/* Background Glow */}
      <div className="testimonials-bg-glow" />

      <Container size="lg">
        {/* Section Heading */}
        <SectionHeading
          badge="CUSTOMER SUCCESS STORIES"
          title="Built for Teams That Need More Qualified Leads"
          subtitle="See how agency founders, consultants, and lead gen teams scale outbound revenue with LeadGen AI."
          align="center"
        />

        {/* 3 Testimonial Cards Grid */}
        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <GlassCard
              key={item.id}
              className="testimonial-card hover-lift"
              padding="lg"
              data-aos="fade-up"
              data-aos-delay={(idx + 1) * 100}
            >
              <div className="testimonial-card-top">
                {/* 5-Star Rating */}
                <div className="star-rating-row" aria-label="5 out of 5 stars rating">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <Quote size={24} className="quote-watermark" />
              </div>

              {/* Quote Body */}
              <p className="testimonial-quote">"{item.quote}"</p>

              {/* User Profile Info */}
              <div className="testimonial-profile">
                <div className="avatar-initials-box">
                  <span>{item.initials}</span>
                </div>
                <div className="profile-details">
                  <div className="name-verified-row">
                    <span className="profile-name">{item.name}</span>
                    <span className="verified-user-pill" title="Verified Customer">
                      <CheckCircle2 size={12} color="#22C55E" />
                      <span>Verified</span>
                    </span>
                  </div>
                  <span className="profile-company">
                    {item.role} @ {item.company}
                  </span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </section>
  );
};
