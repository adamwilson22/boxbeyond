'use client';

import { useEffect, useState } from 'react';
import { Star, Check } from 'lucide-react';
import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle } from '@/lib/ui-styles';

type Plan = {
  title: string;
  price: string;
  trucks: string;
  features: string[];
};

const defaultPlans: Plan[] = [
  { title: 'Studio Apartment', price: '779', trucks: '1 Truck included', features: ['Personal Move Coordinator', 'Furniture Protection', 'Dismantling & Assembly'] },
  { title: '1 BHK Apartment', price: '1,299', trucks: '1 Truck included', features: ['Personal Move Coordinator', 'Furniture Protection', 'Dismantling & Assembly'] },
  { title: '2 BHK Apartment', price: '1,699', trucks: '2 Trucks included', features: ['Personal Move Coordinator', 'Furniture Protection', 'Dismantling & Assembly'] },
  { title: '3 BHK Apartment', price: '2,879', trucks: '2 Trucks included', features: ['Personal Move Coordinator', 'Furniture Protection', 'Dismantling & Assembly'] },
  { title: '2 BHK Villa', price: '2,199', trucks: '2 Trucks included', features: ['Personal Move Coordinator', 'Furniture Protection', 'Dismantling & Assembly'] },
  { title: '3 BHK Villa', price: '3,425', trucks: '3 Trucks included', features: ['Personal Move Coordinator', 'Furniture Protection', 'Dismantling & Assembly'] },
];

export default function PricingCards() {
  const [plans, setPlans] = useState<Plan[]>(defaultPlans);

  useEffect(() => {
    fetch('/api/pricing')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length) {
          setPlans(data.map((t: { title: string; price: string; trucks: string; features: string[] }) => ({
            title: t.title,
            price: t.price,
            trucks: t.trucks,
            features: Array.isArray(t.features) ? t.features : [],
          })));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <section className="section" style={{ background: 'var(--soft-grey)', paddingTop: '5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '0.75rem', fontWeight: 700, color: 'var(--text-dark)' }}>Transparent Pricing</h2>
          <p style={{ margin: '0 auto', color: 'var(--text-muted)' }} className="pricing-subtext">
            Every move is different, that&apos;s why we don&apos;t guess. But here are typical starting ranges for standard moves.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {plans.map((plan, index) => (
            <div key={index} style={{
              ...cardStyle,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              textAlign: 'left',
              padding: '2rem',
              gap: '1.25rem',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--border-color)',
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--muted-gold)', marginBottom: '0.25rem' }}>{plan.title}</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>from AED</span>
                <span style={{ fontSize: '2.5rem', fontWeight: 700, background: 'var(--gold-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.02em' }}>{plan.price}</span>
              </div>
              <div style={{
                background: 'var(--muted-gold-bg)',
                padding: '0.6rem 1.2rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.9rem',
                fontWeight: 500,
                width: 'fit-content',
                color: 'var(--muted-gold)',
              }}>
                🚚 {plan.trucks}
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem', padding: 0, width: '100%', alignItems: 'flex-start' }}>
                {(plan.features || []).map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%' }}>
                    <Check size={18} color="var(--muted-gold)" style={{ flexShrink: 0 }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href={whatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{
                marginTop: 'auto',
                padding: '0.9rem 1.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 500,
                fontSize: '0.95rem',
                border: '1.5px solid var(--muted-gold)',
                color: 'var(--muted-gold)',
                background: 'transparent',
                transition: 'all 0.2s ease'
              }}>
                Check Availability
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
