import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { GlassCard } from '../components/ui/GlassCard';
import { Button } from '../components/ui/Button';

export const SignupPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: 'var(--bg-main)' }}>
      <SEO
        title="Sign Up Free — LeadGen AI"
        description="Create your free LeadGen AI account and get 25 lead credits."
      />
      <Navbar />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 24px 60px' }}>
        <GlassCard style={{ width: '100%', maxWidth: '440px', padding: '32px' }} glow>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '8px' }}>Get Started Free</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              25 Free Lead Credits • No Credit Card Required
            </p>
          </div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="name" style={{ fontSize: '0.875rem', fontWeight: 600 }}>Full Name</label>
              <input
                id="name"
                type="text"
                placeholder="Alex Morgan"
                required
                style={{
                  height: '46px',
                  padding: '0 16px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="email" style={{ fontSize: '0.875rem', fontWeight: 600 }}>Work Email</label>
              <input
                id="email"
                type="email"
                placeholder="alex@company.com"
                required
                style={{
                  height: '46px',
                  padding: '0 16px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="password" style={{ fontSize: '0.875rem', fontWeight: 600 }}>Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                style={{
                  height: '46px',
                  padding: '0 16px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                }}
              />
            </div>

            <Button type="submit" variant="primary" fullWidth size="lg">
              Create Account Free →
            </Button>
          </form>

          <p style={{ textAlign: 'center', fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '24px' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#60A5FA', fontWeight: 600 }}>
              Sign In
            </Link>
          </p>
        </GlassCard>
      </main>
      <Footer />
    </div>
  );
};
