'use client';

import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletDotStyle, bulletCheckStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Check } from 'lucide-react';

export default function DeepCleaningPage() {
    return (
        <ServicePageLayout
            title="Deep Cleaning in Dubai (Move-In / Move-Out) — Verified Partners"
            subtitle='Professional deep cleaning in Dubai for apartments, villas, and offices — coordinated by Box & Beyond and delivered through our verified deep cleaning partners. Perfect for move-in refresh, move-out handover, and getting your home "handover-ready" to help reduce cleaning-related disputes.'
            primaryCta={{
                text: "WhatsApp for Deep Cleaning Quote",
                href: whatsAppUrl("Hi, I'd like a deep cleaning quote.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/#contact"
            }}
            note="Service delivery: Deep cleaning is performed by verified partner teams, not by Box & Beyond's in-house crew. We manage booking coordination, scheduling, and follow-up."
        >
            {/* What's included in deep cleaning */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>What&apos;s included in deep cleaning (typical scope)</h2>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>Deep cleaning is more detailed than regular cleaning. It focuses on build-up areas and high-touch zones.</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        {[
                            {
                                title: "Kitchen deep clean",
                                items: [
                                    "Degreasing and cleaning of surfaces",
                                    "Sink and faucet deep clean",
                                    "External cleaning of cabinets and drawers",
                                    "Stove / hob external cleaning",
                                    "Floor deep cleaning"
                                ],
                                note: "Inside oven / inside fridge can be added as an extra if required."
                            },
                            {
                                title: "Bathroom deep clean",
                                items: [
                                    "Tiles and grout cleaning (where accessible)",
                                    "Toilet, sink, shower/bathtub deep clean",
                                    "Mirrors and fittings cleaned",
                                    "Floor deep cleaning"
                                ]
                            },
                            {
                                title: "Rooms & living areas",
                                items: [
                                    "Floor deep clean (tile/wood as applicable)",
                                    "Skirting boards wiped",
                                    "Doors/handles/high-touch points cleaned",
                                    "Dusting of reachable surfaces"
                                ],
                                note: "Windows (optional): Interior window cleaning can be added depending on access and safety."
                            }
                        ].map((section, i) => (
                            <div key={i} style={{ ...cardStyle }}>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600 }}>{section.title}</h3>
                                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: section.note ? '1rem' : '0' }}>
                                    {section.items.map((item, j) => (
                                        <li key={j} style={{ ...bulletCheckStyle, fontSize: '0.95rem' }}>
                                            <Check size={16} color="#22c55e" style={{ flexShrink: 0 }} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {section.note && (
                                    <p style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', marginTop: '0.5rem' }}>{section.note}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Move-in vs move-out */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Move-in vs move-out deep cleaning (what customers should know)</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600 }}>Move-In Deep Cleaning</h3>
                            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '0.75rem', fontWeight: 600 }}>Best when:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>the home was previously occupied</span></li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>you want hygiene and freshness before unpacking</span></li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>there was renovation dust or long vacancy</span></li>
                            </ul>
                        </div>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600 }}>Move-Out Deep Cleaning (handover-ready)</h3>
                            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '0.75rem', fontWeight: 600 }}>Best when:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>you want to return the unit in a cleaner condition for inspection</span></li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>you want to reduce cleaning-related deductions/disputes</span></li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>you want a smoother handover experience</span></li>
                            </ul>
                        </div>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.95rem', color: '#666' }}>Every building/landlord has different standards. We focus on delivering a strong, detailed clean with clear scope.</p>
                </div>
            </section>

            {/* How it works */}
            <section className="section">
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 600 }}>How it works (Box & Beyond coordination)</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            "Share your property type + size and location (WhatsApp)",
                            "We match you with a verified deep cleaning partner team",
                            "You receive a clear quote and available time slots",
                            "Partner team completes cleaning at your scheduled time",
                            "Box & Beyond follows up for completion and feedback"
                        ].map((step, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 0', borderBottom: '1px solid #eee' }}>
                                <span style={{ width: '28px', height: '28px', background: 'var(--muted-gold)', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '0.9rem' }}>{i + 1}</span>
                                <span style={{ fontSize: '1.05rem', color: '#333' }}>{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What impacts price */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 600 }}>What impacts deep cleaning price in Dubai?</h2>
                    <p style={{ marginBottom: '1.5rem', fontWeight: 600, textAlign: 'center' }}>Pricing depends on:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                        {['Property type and size (studio/1BR/2BR/villa/office)', 'Condition (light vs heavy build-up)', 'Number of bathrooms', 'Access and timing (same-day vs scheduled)', 'Add-ons requested (inside appliances, windows, balcony, etc.)'].map((factor, i) => (
                            <span key={i} style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.95rem', color: '#555', border: '1px solid #eee' }}>{factor}</span>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', color: '#666', lineHeight: 1.7 }}><strong>Fast quote tip:</strong> Share photos or a short video walkthrough for accurate scoping.</p>
                </div>
            </section>

            {/* What's included vs not included */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 600 }}>Add-ons (quoted separately)</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                {['Inside oven cleaning', 'Inside fridge cleaning', 'Balcony deep cleaning', 'Interior windows (where accessible)', 'Heavy stain/spot treatment', 'Post-renovation cleaning (if required)'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 600 }}>What&apos;s not included (unless requested)</h3>
                            <p style={{ fontSize: '0.95rem', color: '#555', marginBottom: '1rem' }}>To keep pricing transparent, these are typically outside standard deep cleaning:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                {['Painting/patchwork/maintenance repairs', 'Pest control (separate service)', 'AC duct/internal coil cleaning (separate service)', 'Lifting/moving heavy furniture (unless agreed in advance)'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section" style={{ background: '#fafafa' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '3rem', fontWeight: 600 }}>FAQs — Deep Cleaning Dubai</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            { q: "Is deep cleaning provided by Box & Beyond staff?", a: "No. Deep cleaning is delivered by our verified partner teams. Box & Beyond coordinates scheduling, scope, and follow-up." },
                            { q: "How long does deep cleaning take?", a: "It depends on unit size and condition. We share an estimated duration when confirming the booking." },
                            { q: "Do I need to provide cleaning materials?", a: "Partner teams usually bring standard tools/materials. If your unit requires special products (e.g., delicate surfaces), tell us in advance." },
                            { q: "Can I book deep cleaning for move-out handover?", a: "Yes. This is one of the most common use cases." },
                            { q: "Can you do same-day deep cleaning?", a: "Sometimes yes, subject to availability. Booking in advance is recommended." }
                        ].map((faq, i) => (
                            <div key={i} style={{ paddingBottom: '1.5rem', borderBottom: '1px solid #eee' }}>
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>{faq.q}</h4>
                                <p style={{ color: '#666', lineHeight: 1.6 }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center', background: '#fafafa' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Book Deep Cleaning in Dubai Today</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Send your home size + location + preferred date on WhatsApp and we'll match you with the right verified partner team.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I'd like a deep cleaning quote.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp for Deep Cleaning Quote
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
