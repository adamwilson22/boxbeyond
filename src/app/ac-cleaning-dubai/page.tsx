'use client';

import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function ACCleaningPage() {
    return (
        <ServicePageLayout
            title="AC Cleaning in Dubai — Verified Partners"
            subtitle="Professional AC cleaning in Dubai for apartments and villas — coordinated by Box & Beyond and delivered through our verified AC cleaning partners. Ideal for move-in hygiene, improved cooling performance, and reducing odors/dust after tenant change or renovation."
            primaryCta={{
                text: "WhatsApp for AC Cleaning Quote",
                href: whatsAppUrl("Hi, I'd like an AC cleaning quote.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/#contact"
            }}
            note="Service delivery: AC cleaning is performed by verified partner teams, not by Box & Beyond's in-house crew. We coordinate booking, scheduling, and follow-up."
        >
            {/* AC services */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>AC services we coordinate</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "AC deep cleaning (indoor unit)",
                            "AC filter cleaning / replacement guidance",
                            "Coil cleaning (as applicable)",
                            "Drain line flushing / clog check (as applicable)",
                            "Basic inspection + recommendations"
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
                        {['Number of AC units', 'Unit type (wall-mounted/split/etc.)', 'Condition (dust buildup, odor, leakage signs)', 'Access and timing'].map((factor, i) => (
                            <span key={i} style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.95rem', color: '#555', border: '1px solid #eee' }}>{factor}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Preparation */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 600 }}>Preparation (simple)</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        <div style={{ ...cardStyle }}>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>Clear access around AC unit</p>
                        </div>
                        <div style={{ ...cardStyle }}>
                            <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>Share unit count + photos for accurate quoting</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center', background: '#fafafa' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Book AC Cleaning in Dubai Today</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Send your unit count + photos on WhatsApp for a fast quote.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I'd like an AC cleaning quote.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp for AC Cleaning Quote
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
