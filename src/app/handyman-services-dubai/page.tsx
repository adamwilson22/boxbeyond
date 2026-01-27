'use client';

import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function HandymanServicesPage() {
    return (
        <ServicePageLayout
            title="Handyman Services in Dubai — Verified Partners"
            subtitle="Handyman services in Dubai for move-in setup and move-out fixes — coordinated by Box & Beyond and delivered through our verified handyman partners. Perfect for small jobs that usually get delayed after a move."
            primaryCta={{
                text: "WhatsApp for Handyman Quote",
                href: whatsAppUrl("Hi, I'd like a handyman services quote.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/#contact"
            }}
            note="Service delivery: Handyman work is performed by verified partner teams, not by Box & Beyond's in-house crew. We coordinate scheduling, scope, and follow-up."
        >
            {/* Handyman jobs */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Handyman jobs we coordinate</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "Curtain rails / curtain installation support (if required)",
                            "Shelves, frames, mirrors mounting (as scoped)",
                            "Minor door handle/lock adjustments (as scoped)",
                            "Small repairs and fittings",
                            "Silicone touch-ups and minor sealing (as scoped)"
                        ].map((job, i) => (
                            <div key={i} style={{ ...cardStyle }}>
                                <p style={{ fontSize: '1rem', color: '#333', lineHeight: 1.6 }}>{job}</p>
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
                        {['Type and number of tasks', 'Materials required (provided by customer or supplied—confirm upfront)', 'Access and time required', 'Complexity (wall type, drilling requirements)'].map((factor, i) => (
                            <span key={i} style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.95rem', color: '#555', border: '1px solid #eee' }}>{factor}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Notes */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div style={{ ...cardStyle, background: 'rgba(182, 141, 93, 0.06)' }}>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 600 }}>Notes (scope clarity)</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Major civil work, large renovations, and complex custom carpentry are outside standard handyman scope.</span></li>
                            <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Floorplan changes/design decisions are not part of handyman scope.</span></li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center', background: '#fafafa' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Book Handyman Services in Dubai Today</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Send your task list + photos on WhatsApp for a fast quote.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I'd like a handyman services quote.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp for Handyman Quote
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
