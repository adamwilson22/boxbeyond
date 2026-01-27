'use client';

import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function PetGroomingPage() {
    return (
        <ServicePageLayout
            title="Pet Grooming at Home in Dubai — Verified Partners (Pawfect Groomers)"
            subtitle="Doorstep pet grooming in Dubai — coordinated by Box & Beyond through verified pet grooming partner Pawfect Groomers. Ideal on move day: while you handle packing/unpacking, your pet gets cleaned, groomed, and ready for the new home."
            primaryCta={{
                text: "WhatsApp for Pet Grooming Booking",
                href: whatsAppUrl("Hi, I'd like to book pet grooming services.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/#contact"
            }}
            note="Service delivery: Grooming is performed by verified partner groomers, not Box & Beyond staff. Availability depends on area and time slots."
        >
            {/* Grooming services */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Grooming services we coordinate</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            "Bath & blow-dry",
                            "Trimming / haircut (as applicable)",
                            "Nail trim and basic hygiene grooming",
                            "Add-ons based on pet condition and breed"
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
                        {['Pet size/breed and coat condition', 'Type of groom (basic vs full groom)', 'Matting severity (if any)', 'Duration and location'].map((factor, i) => (
                            <span key={i} style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.95rem', color: '#555', border: '1px solid #eee' }}>{factor}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center', background: '#fafafa' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Book Pet Grooming in Dubai Today</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Send your pet details + location + preferred date on WhatsApp to schedule.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I'd like to book pet grooming services.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp for Pet Grooming Booking
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
