'use client';

import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function WaterTankCleaningPage() {
    return (
        <ServicePageLayout
            title="Water Tank Cleaning in Dubai — Verified Partners"
            subtitle="Water tank cleaning in Dubai (especially for villas and tank-based systems) — coordinated by Box & Beyond and delivered through our verified water tank cleaning partners. Recommended for hygiene, odor control, and periodic maintenance."
            primaryCta={{
                text: "WhatsApp for Water Tank Cleaning Quote",
                href: whatsAppUrl("Hi, I'd like a water tank cleaning quote.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/#contact"
            }}
            note="Service delivery: Water tank cleaning is performed by verified partner teams, not by Box & Beyond's in-house crew. We coordinate booking and scheduling."
        >
            {/* Water tank services */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Water tank services we coordinate</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "Tank draining (as applicable)",
                            "Internal cleaning and sludge removal (as applicable)",
                            "Tank sanitization/disinfection (as applicable)",
                            "Basic inspection and recommendations",
                            "Optional: cover/pipe check referral if issues are found"
                        ].map((service, i) => (
                            <div key={i} style={{ ...cardStyle }}>
                                <p style={{ fontSize: '1rem', color: '#333', lineHeight: 1.6 }}>{service}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What impacts price */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 600 }}>What impacts price</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                        {['Tank size and type', 'Accessibility (roof access / confined space)', 'Condition (heavy sediment vs light)', 'Number of tanks'].map((factor, i) => (
                            <span key={i} style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.95rem', color: '#555', border: '1px solid #eee' }}>{factor}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Preparation */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 600 }}>Preparation</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        <div style={{ ...cardStyle }}>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>Confirm tank location/access</p>
                        </div>
                        <div style={{ ...cardStyle }}>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>Share villa/community details + tank count (photos help)</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center', background: '#fafafa' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Book Water Tank Cleaning in Dubai Today</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Send your tank details + location on WhatsApp for a fast quote.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I'd like a water tank cleaning quote.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp for Water Tank Cleaning Quote
                        </a>
                        <a href="/#contact" className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Request Callback
                        </a>
                    </div>
                </div>
            </section>
        </ServicePageLayout>
    );
}
