'use client';

import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';
import { Sparkles } from 'lucide-react';

export default function FurnitureCleaningPage() {
    return (
        <ServicePageLayout
            title="Furniture Cleaning in Dubai (Sofa, Mattress & Upholstery) — Verified Partners"
            subtitle="Professional furniture cleaning in Dubai for sofas, mattresses, chairs, carpets and rugs — coordinated by Box & Beyond and delivered through our verified cleaning partners. Perfect for move-in refresh, move-out handover, and restoring hygiene after tenants, pets, or renovation dust."
            primaryCta={{
                text: "WhatsApp for Furniture Cleaning Quote",
                href: whatsAppUrl("Hi, I'd like a furniture cleaning quote.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/#contact"
            }}
            note="Service delivery: Furniture cleaning is performed by verified partner teams, not by Box & Beyond's in-house crew. We manage booking coordination, scheduling, and follow-up for a smooth customer experience."
        >
            {/* What furniture cleaning services we offer */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>What furniture cleaning services we offer (Dubai)</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { title: "Sofa Cleaning (Fabric & Leather)", desc: "Deep sofa cleaning designed to remove dust buildup, odors, and visible stains based on material type." },
                            { title: "Mattress Cleaning", desc: "Hygiene-focused mattress cleaning to refresh sleeping surfaces and improve cleanliness." },
                            { title: "Upholstered Chair Cleaning (Dining / Office)", desc: "Spot + deep cleaning for chairs with fabric upholstery." },
                            { title: "Carpet & Rug Cleaning", desc: "Carpet cleaning options depending on rug type and whether cleaning is done on-site or requires specialist handling." }
                        ].map((item, i) => (
                            <div key={i} style={{ ...cardStyle }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 600 }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem', background: 'rgba(182, 141, 93, 0.06)', borderRadius: '8px' }}>
                        <p style={{ fontSize: '0.95rem', color: '#555' }}>
                            <strong>Fast quote tip:</strong> Send photos on WhatsApp and we'll recommend the correct cleaning method and give accurate pricing.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why book furniture cleaning when moving */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Why book furniture cleaning when moving?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { title: "Move-in ready cleaning", desc: "Start your new home fresh — especially if the home was previously occupied or recently renovated." },
                            { title: "Move-out handover support", desc: "A professional clean improves presentation during handover and can help reduce back-and-forth on cleanliness concerns." },
                            { title: "Hygiene and comfort", desc: "Furniture holds dust, sweat, and odors over time. Cleaning makes your space feel noticeably fresher." }
                        ].map((item, i) => (
                            <div key={i} style={{ ...cardStyle }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 600 }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="section">
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 600 }}>How it works (Box & Beyond coordination)</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {[
                            "Share your items + photos (sofa type, number of seats, mattress size, chairs, rugs)",
                            "We match you with a verified partner team based on fabric and scope",
                            "You receive a clear quote + appointment slot",
                            "Partner team completes the service at your home",
                            "We follow up to ensure service completion and satisfaction"
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
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 600 }}>What impacts furniture cleaning price in Dubai?</h2>
                    <p style={{ marginBottom: '1.5rem', fontWeight: 600, textAlign: 'center' }}>Furniture cleaning pricing depends on:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                        {['Item type and size (1-seater vs L-shape sofa)', 'Material (fabric vs leather)', 'Stain level and odor intensity', 'Number of items (bundle pricing often applies)', 'Access and timing (same-day vs scheduled)'].map((factor, i) => (
                            <span key={i} style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.95rem', color: '#555', border: '1px solid #eee' }}>{factor}</span>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', color: '#666', lineHeight: 1.7 }}>If there are multiple items, we can structure a bundle quote (sofa + mattress + chairs).</p>
                </div>
            </section>

            {/* What's included vs add-ons */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 600 }}>What&apos;s included (typical scope)</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Fabric/material assessment (photo-based + on-site check)</span></li>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Deep cleaning method suitable for the material</span></li>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Spot treatment where possible</span></li>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Deodorizing / refresh finish (where appropriate)</span></li>
                            </ul>
                            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>
                                <strong>Important:</strong> Results depend on fabric type, stain age, and prior damage. We focus on safe cleaning methods and best possible improvement.
                            </p>
                        </div>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 600 }}>Add-ons (quoted separately)</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                {['Heavy stain treatment / multiple stain areas', 'Large sectionals and oversized sofas', 'Specialist rug treatment (depending on rug type)', 'Multiple-room packages'].map((item, i) => (
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
                    <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '3rem', fontWeight: 600 }}>FAQs — Furniture Cleaning Dubai</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            { q: "Is this service provided by Box & Beyond staff?", a: "No. Furniture cleaning is delivered by our verified partner teams. Box & Beyond coordinates scheduling, scope, and follow-up." },
                            { q: "Can you remove all stains?", a: "We aim for best improvement, but results depend on stain type, fabric, and how long it has been there." },
                            { q: "Do you clean at home or take items away?", a: "Most sofas and mattresses are cleaned at home. Some rugs may require specialized handling depending on type/condition." },
                            { q: "How long does it take to dry?", a: "Drying time depends on the method, fabric, and ventilation. The partner team will advise on-site." },
                            { q: "Can I book it on move day?", a: "Sometimes yes, but it's usually better after the move so furniture is placed and accessible." }
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
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Book Sofa & Mattress Cleaning in Dubai Today</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Send photos of your items and your Dubai location on WhatsApp for a fast quote. We'll match you with the right verified partner and schedule the visit.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I'd like a furniture cleaning quote.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp for Furniture Cleaning Quote
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
