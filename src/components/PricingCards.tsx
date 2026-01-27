'use client';

import { useEffect, useState } from 'react';
import { Star, Check } from 'lucide-react';
import { whatsAppUrl } from '@/lib/site-config';
import { pricingCardStyle, bulletCheckStyle } from '@/lib/ui-styles';

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
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>Transparent Pricing</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            Every move is different, that&apos;s why we don&apos;t guess. But here are typical starting ranges for standard moves.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {plans.map((plan, index) => (
            <div key={index} style={{
              ...pricingCardStyle,
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem'
            }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600, color: 'var(--muted-gold)', marginBottom: '0.25rem' }}>{plan.title}</h3>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.95rem', color: '#666', fontWeight: 400 }}>AED</span>
                <span style={{ fontSize: '2.75rem', fontWeight: 700, color: 'var(--deep-charcoal)', letterSpacing: '-0.02em' }}>{plan.price}</span>
              </div>
              <div style={{
                background: 'rgba(182, 141, 93, 0.08)',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                fontSize: '0.9rem',
                fontWeight: 500,
                width: 'fit-content',
                margin: '0 auto',
                color: 'var(--muted-gold)'
              }}>
                🚚 {plan.trucks}
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
                {(plan.features || []).map((feature, i) => (
                  <li key={i} style={{ ...bulletCheckStyle }}>
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
