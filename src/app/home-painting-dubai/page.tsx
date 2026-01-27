'use client';

import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function HomePaintingPage() {
    return (
        <ServicePageLayout
            title="Home Painting in Dubai — Verified Partners"
            subtitle="Home painting in Dubai for apartments and villas — coordinated by Box & Beyond and delivered through our verified painting partners. Perfect for move-out repainting, move-in refresh, touch-ups, and landlord handovers."
            primaryCta={{
                text: "WhatsApp for Painting Quote",
                href: whatsAppUrl("Hi, I'd like a home painting quote.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/#contact"
            }}
            note="Service delivery: Painting is performed by verified partner teams, not by Box & Beyond's in-house crew. We coordinate site survey, scope, scheduling, and follow-up."
        >
            {/* Painting services */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Painting services we coordinate</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "Full apartment painting / villa painting",
                            "Room-by-room painting",
                            "Touch-ups and patchwork (as scoped)",
                            "Minor crack filling / surface prep (as scoped)",
                            "Optional: repaint for handover readiness"
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
                        {['Property size and number of rooms', 'Paint quality/brand selection', 'Wall condition (patchwork required or not)', 'Ceiling painting (if required)', 'Furniture coverage/protection needs'].map((factor, i) => (
                            <span key={i} style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.95rem', color: '#555', border: '1px solid #eee' }}>{factor}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Notes */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ ...cardStyle, background: 'rgba(182, 141, 93, 0.06)' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>Notes (clear scope)</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Exact inclusions (paint supply, number of coats, patchwork level) are confirmed before booking.</span></li>
                            <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Floorplan changes or interior design work are not part of painting scope.</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center', background: '#fafafa' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Book Home Painting in Dubai Today</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Send your property size + photos on WhatsApp for a fast quote.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I'd like a home painting quote.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp for Painting Quote
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
