'use client';

import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function ElectricalWorkPage() {
    return (
        <ServicePageLayout
            title="Electrical Work in Dubai — Verified Partners"
            subtitle="Electrical services in Dubai for homes and small offices — coordinated by Box & Beyond and delivered through our verified electrical partners. Best for move-in setup, safety fixes, and replacing faulty fittings."
            primaryCta={{
                text: "WhatsApp for Electrical Quote",
                href: whatsAppUrl("Hi, I'd like an electrical work quote.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/#contact"
            }}
            note="Service delivery: Electrical work is performed by verified partner teams, not by Box & Beyond's in-house crew. We coordinate scope, scheduling, and follow-up."
        >
            {/* Electrical services */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Electrical services we coordinate</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "Light fitting replacement / installation (as scoped)",
                            "Switch and socket replacement",
                            "Basic electrical fault checks (as scoped)",
                            "Ceiling fan installation (if applicable)",
                            "Minor wiring fixes (non-major; subject to assessment)"
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
                        {['Number of points (lights/sockets/switches)', 'Complexity and access (ceiling height, ladder work)', 'Parts required (customer-supplied or partner-supplied as agreed)', 'Urgency and timing'].map((factor, i) => (
                            <span key={i} style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.95rem', color: '#555', border: '1px solid #eee' }}>{factor}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center', background: '#fafafa' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Book Electrical Services in Dubai Today</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Send your requirements + photos on WhatsApp for a fast quote.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I'd like an electrical work quote.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp for Electrical Quote
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
