'use client';

import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function CurtainsPage() {
    return (
        <ServicePageLayout
            title="New Curtains (Measure + Fabric + Stitch + Install) — Verified Partners"
            subtitle="Custom curtains made easy in Dubai — coordinated by Box & Beyond through verified curtain partner Nestyq. A partner specialist visits your home, brings fabric samples, takes measurements, and coordinates stitching + installation."
            primaryCta={{
                text: "WhatsApp for Curtains Visit",
                href: whatsAppUrl("Hi, I'd like to book a curtains consultation.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/#contact"
            }}
            note="Service delivery: Curtains are provided by verified partner suppliers/installers, not Box & Beyond staff."
        >
            {/* Curtain services */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Curtain services we coordinate</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "Home visit for measurement",
                            "Fabric sample selection at home",
                            "Stitching/customization as per requirement",
                            "Installation and finishing"
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
                        {['Number of windows and curtain type', 'Fabric choice', 'Rail/tracks requirements', 'Complexity (blackout, sheer, layered, custom heights)'].map((factor, i) => (
                            <span key={i} style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.95rem', color: '#555', border: '1px solid #eee' }}>{factor}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center', background: '#fafafa' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Book Curtains Service in Dubai Today</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Send your window count + photos on WhatsApp to schedule a home visit.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I'd like to book a curtains consultation.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp for Curtains Visit
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
