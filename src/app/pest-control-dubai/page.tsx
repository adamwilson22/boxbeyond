'use client';

import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function PestControlPage() {
    return (
        <ServicePageLayout
            title="Pest Control in Dubai (Apartment & Villa) — Verified Partners"
            subtitle="Professional pest control in Dubai for apartments, villas, and offices — coordinated by Box & Beyond and delivered through our verified pest control partners. Ideal for move-in prevention, move-out handover, and protecting your home from common Dubai pests."
            primaryCta={{
                text: "WhatsApp for Pest Control Quote",
                href: whatsAppUrl("Hi, I'd like a pest control quote.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/#contact"
            }}
            note="Service delivery: Pest control is performed by verified partner teams, not by Box & Beyond's in-house crew. We coordinate booking, scheduling, and follow-up."
        >
            {/* Pest control services */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Pest control services we coordinate in Dubai</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { title: "General Pest Control", desc: "Common household pests such as ants, cockroaches, and other crawling insects (scope depends on infestation type and property conditions)." },
                            { title: "Cockroach Treatment", desc: "Targeted treatment plans for kitchens, drains, and high-risk zones (severity-based)." },
                            { title: "Ant Control", desc: "Treatment focused on entry points, trails, and nesting zones." },
                            { title: "Bed Bug Treatment (Assessment Required)", desc: "Bed bug cases vary widely. A proper assessment is required to confirm method, number of visits, and preparation steps." },
                            { title: "Rodent Control (If Needed)", desc: "Inspection + baiting/trapping depending on location and evidence." }
                        ].map((item, i) => (
                            <div key={i} style={{ ...cardStyle }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 600 }}>{item.title}</h3>
                                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2rem', padding: '1rem', background: 'rgba(182, 141, 93, 0.06)', borderRadius: '8px' }}>
                        <p style={{ fontSize: '0.95rem', color: '#555' }}>
                            <strong>Not sure what you have?</strong> Send photos or describe symptoms on WhatsApp — we'll guide next steps.
                        </p>
                    </div>
                </div>
            </section>

            {/* Move-in vs move-out */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 600 }}>Move-in vs move-out pest control (what customers should know)</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600 }}>Move-In Pest Control (Recommended)</h3>
                            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '0.75rem', fontWeight: 600 }}>Best when:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>the home was vacant or previously occupied</span></li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>you want prevention before unpacking</span></li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>you're moving into a unit with visible pest signs</span></li>
                            </ul>
                        </div>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', fontWeight: 600 }}>Move-Out Pest Control (Handover Support)</h3>
                            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '0.75rem', fontWeight: 600 }}>Useful when:</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>your landlord/building requires pest control proof</span></li>
                                <li style={{ ...bulletDotStyle, fontSize: '0.95rem' }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>you want to reduce disputes during handover</span></li>
                            </ul>
                            <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>Requirements differ by landlord/building. We coordinate service and can guide on documentation requests where applicable.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="section">
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center' }}>How it works</h2>
                    <div style={{ display: 'grid', gap: '2rem', alignItems: 'stretch' }} className="how-it-works-grid how-it-works-5">
                        {[
                            { step: 1, title: "Share property details", text: "Share your property type + size and issue details (WhatsApp)." },
                            { step: 2, title: "We match you with a partner", text: "Verified pest control partner based on pest type and urgency." },
                            { step: 3, title: "Quote + slots", text: "You receive a clear quote and available slots." },
                            { step: 4, title: "Treatment", text: "Partner team performs the treatment." },
                            { step: 5, title: "Follow-up", text: "We follow up to confirm completion and next steps (if any)." }
                        ].map((s, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', position: 'relative' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--muted-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white', flexShrink: 0, marginBottom: '1rem' }}>{s.step}</div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', fontWeight: 600, color: 'var(--text-dark)' }}>{s.title}</h4>
                                <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: 1.6, margin: 0 }}>{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What impacts price */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 600 }}>What impacts pest control price in Dubai?</h2>
                    <p style={{ marginBottom: '1.5rem', fontWeight: 600, textAlign: 'center' }}>Pricing depends on:</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                        {['Property size (studio/1BR/2BR/villa/office)', 'Pest type (general vs bed bugs vs rodents)', 'Severity and hotspots', 'Number of visits required (some cases require follow-ups)', 'Urgency (same-day vs scheduled)'].map((factor, i) => (
                            <span key={i} style={{ background: 'white', padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.95rem', color: '#555', border: '1px solid #eee' }}>{factor}</span>
                        ))}
                    </div>
                    <p style={{ textAlign: 'center', color: '#666', lineHeight: 1.7 }}><strong>Fast quote tip:</strong> Share the area affected + photos if available.</p>
                </div>
            </section>

            {/* Preparation & safety */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 600 }}>Preparation & safety (important)</h2>
                    <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1rem' }}>To ensure effectiveness and safety:</p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Follow the partner team's preparation instructions</span></li>
                        <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Keep food covered and kitchen surfaces clear (if required)</span></li>
                        <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Some treatments require temporary vacancy for a period—this depends on product and method</span></li>
                        <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Tell us if there are children, pets, or sensitivities in the home so we can coordinate appropriately</span></li>
                    </ul>
                </div>
            </section>

            {/* What's included vs add-ons */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', fontWeight: 600 }}>What&apos;s included (typical scope)</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Site inspection/assessment on arrival</span></li>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Treatment application based on pest type</span></li>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Guidance on post-treatment steps</span></li>
                                <li style={{ ...bulletDotStyle }}><span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span><span>Follow-up recommendation if required</span></li>
                            </ul>
                            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#666', lineHeight: 1.6 }}>Results depend on pest type, severity, sanitation, and whether entry points can be controlled. We focus on effective treatment with clear guidance.</p>
                        </div>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: 600 }}>Add-ons (quoted separately)</h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                {['Multiple visits / follow-up treatments', 'Gel baiting in high-risk cases (if recommended)', 'Rodent proofing / entry point sealing (handyman work, separate scope)', 'Disinfection or deep cleaning (separate service)'].map((item, i) => (
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
                    <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '3rem', fontWeight: 600 }}>FAQs — Pest Control Dubai</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            { q: "Is pest control done by Box & Beyond team?", a: "No. Pest control is delivered by our verified partner teams. Box & Beyond coordinates the booking and follow-up." },
                            { q: "Do I need to leave the house during treatment?", a: "It depends on the method and product used. The partner team will advise clearly before and after the treatment." },
                            { q: "How long does it take to work?", a: "This varies by pest type and severity. You'll receive guidance on what to expect after treatment." },
                            { q: "Do you provide a warranty/guarantee?", a: "Terms vary by treatment type and partner policy. We'll share the applicable terms before booking." },
                            { q: "Can you do same-day pest control?", a: "Sometimes yes, subject to availability. Booking in advance is recommended." }
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
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Book Pest Control in Dubai Today</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Send your location + home size + pest issue on WhatsApp and we'll match you with the right verified partner team.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I'd like a pest control quote.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp for Pest Control Quote
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
