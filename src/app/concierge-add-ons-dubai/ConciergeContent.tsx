'use client';

import Link from 'next/link';
import { whatsAppUrl } from '@/lib/site-config';
import { cardStyle, bulletDotStyle } from '@/lib/ui-styles';
import ServicePageLayout from '@/components/ServicePageLayout';

export default function ConciergeContent() {
    const addons = [
        { id: 'deep-cleaning', emoji: '🧼', title: "Deep Cleaning", href: "/deep-cleaning-dubai", desc: "Move-in or move-out deep cleaning for kitchens, bathrooms, floors, and high-touch areas." },
        { id: 'pest-control', emoji: '🪳', title: "Pest Control", href: "/pest-control-dubai", desc: "Targeted treatments to prevent infestations and support smooth handover compliance." },
        { id: 'ac-cleaning', emoji: '❄️', title: "AC Cleaning", href: "/ac-cleaning-dubai", desc: "Deep AC cleaning to improve air quality, reduce odors, and restore cooling performance." },
        { id: 'home-painting', emoji: '🎨', title: "Home Painting", href: "/home-painting-dubai", desc: "Touch-ups or full repainting to refresh the home or meet landlord handover expectations." },
        { id: 'water-tank-cleaning', emoji: '🚰', title: "Water Tank Cleaning", href: "/water-tank-cleaning-dubai", desc: "Hygienic tank cleaning and sanitization—especially important for villas and tank-based systems." },
        { id: 'handyman-services', emoji: '🧰', title: "Handyman Services", href: "/handyman-services-dubai", desc: "Curtain rails, shelves, small repairs, fittings—those small jobs that delay move-in readiness." },
        { id: 'plumbing', emoji: '🔧', title: "Plumbing", href: "/plumbing-dubai", desc: "Leaks, tap replacements, drainage issues, water pressure checks, and minor plumbing repairs." },
        { id: 'electrical-work', emoji: '⚡', title: "Electrical Work", href: "/electrical-work-dubai", desc: "Switches, sockets, lights, fixtures, and minor electrical fixes and replacements." },
        { id: 'babysitting', emoji: '👶', title: "Babysitting at Home", href: "/babysitting-at-home-dubai", desc: "Trusted babysitting support while your move is underway — so you can focus without stress." },
        { id: 'curtains-service', emoji: '🪟', title: "New Curtains (Measure + Fabric + Install)", href: "/curtains-dubai", desc: "Our partner visits your home with fabric samples, takes measurements, and arranges custom stitching + installation — so your curtains are done properly without the hassle." },
        { id: 'pet-grooming', emoji: '🐾', title: "Pet Grooming (At Your Doorstep)", href: "/pet-grooming-dubai", desc: "While you're busy packing or unpacking, our trusted grooming partner can come to your home so your furry friend gets a full refresh—clean, calm, and ready for the new home." },
        { id: 'furniture-cleaning', emoji: '🛋️', title: "Furniture Cleaning", href: "/furniture-cleaning-dubai", desc: "Professional sofa, mattress, upholstery, carpet and rug cleaning for move-in refresh and move-out handover." }
    ];

    return (
        <ServicePageLayout
            title={<><span style={{ display: 'block' }}>Concierge Add-Ons</span><span style={{ display: 'block', fontSize: '0.85em', fontWeight: 500, color: '#666', marginTop: '0.25rem' }}>(Move-In / Move-Out Services in Dubai)</span></>}
            subtitle="Moving isn't just about shifting boxes — it's about setting up your new home properly and closing the old one cleanly. To help you move in stress-free (and recover your security deposit on move-out), Box & Beyond offers Concierge Add-Ons: we coordinate trusted suppliers and manage the booking flow for you."
            primaryCta={{
                text: "WhatsApp to Book Your Move-In Package",
                href: whatsAppUrl("Hi, I'd like to build my move-in package.")
            }}
            secondaryCta={{
                text: "Request Callback",
                href: "/get-a-quote"
            }}
            featureBullets={[
                { label: "Move-In Ready:", text: "clean, sanitized, AC serviced, fresh decor, curtains measured & installed" },
                { label: "Move-Out Ready:", text: "deep clean + paint + repairs that landlords check before deposit return" },
                { label: "Our coordinator:", text: "you book through us, we manage the scheduling & follow-up" }
            ]}
            note="Note: These services are delivered by vetted partner suppliers under Box & Beyond coordination. Scope, availability, and pricing vary by property size and requirements."
        >

            {/* Why book add-ons through Box & Beyond — moved right after hero */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container" style={{ maxWidth: '720px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center', fontWeight: 600 }}>Why book add-ons through Box & Beyond?</h2>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                        {['One coordinator instead of multiple vendors', 'Smart scheduling (fixes before handover, cleaning before move-in, etc.)', 'Trusted suppliers we can vouch for', 'Clear scope & confirmations to reduce surprises'].map((item, i) => (
                            <li key={i} style={{ ...bulletDotStyle }}>
                                <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p style={{ textAlign: 'center', color: '#555', lineHeight: 1.7 }}>We&apos;re not here to upsell you. We&apos;re here to make sure your move finishes properly — both at the old home and the new one.</p>
                </div>
            </section>

            {/* How the Concierge works — unified process flow */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '3rem', textAlign: 'center', fontWeight: 600 }}>How the Concierge works</h2>
                    <div style={{ display: 'grid', gap: '2rem', alignItems: 'stretch' }} className="how-it-works-grid">
                        {[
                            { step: 1, title: "Tell us your move date + location" },
                            { step: 2, title: "Choose the services you want (tiles below)" },
                            { step: 3, title: "We schedule vetted partners in the right sequence" },
                            { step: 4, title: "You get confirmations, timing, and a single coordination point" }
                        ].map((s, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
                                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--muted-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: 'white', flexShrink: 0, marginBottom: '1rem' }}>{s.step}</div>
                                <h4 style={{ fontSize: '1.2rem', marginBottom: 0, fontWeight: 600, color: 'var(--text-dark)' }}>{s.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Choose your add-on services (tiles) */}
            <section className="section" style={{ background: 'var(--soft-grey)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', textAlign: 'center', fontWeight: 600 }}>Choose your Add-On Services</h2>
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem', fontSize: '0.95rem' }}>(Each tile links to its own detailed service page.)</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {addons.map((item, i) => (
                            <Link key={i} href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div
                                    style={{
                                        ...cardStyle,
                                        background: 'white',
                                        borderLeft: '4px solid var(--muted-gold)',
                                        padding: '1.5rem',
                                        height: '100%',
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
                                        e.currentTarget.style.borderLeftColor = '#8b6914';
                                        e.currentTarget.style.background = 'rgba(201, 162, 39, 0.06)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.04)';
                                        e.currentTarget.style.borderLeftColor = 'var(--muted-gold)';
                                        e.currentTarget.style.background = 'white';
                                    }}
                                >
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', height: '100%' }}>
                                        <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem', lineHeight: 1, flexShrink: 0 }}>{item.emoji}</div>
                                        <div style={{ width: '100%' }}>
                                            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', fontWeight: 600, color: 'var(--text-dark)' }}>{item.title}</h3>
                                            <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.55, marginBottom: '0.75rem' }}>{item.desc}</p>
                                            <span style={{ fontSize: '0.9rem', color: 'var(--muted-gold)', fontWeight: 500 }}>View {item.title} →</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recommended bundles */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem', fontSize: '2rem', fontWeight: 600 }}>Recommended bundles (high conversion)</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                                <span style={{ color: '#22c55e' }}>✓</span> Move-In Ready Package
                            </h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555' }}>
                                {['Deep Cleaning', 'AC Cleaning', 'Handyman (basic fixes)', 'Curtains (measure + install) (optional but popular)'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                                <span style={{ color: '#22c55e' }}>✓</span> Deposit-Recovery Package (Move-Out)
                            </h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555' }}>
                                {['Deep Cleaning', 'Pest Control', 'Minor handyman fixes (touch-ups / fittings)'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                                <span style={{ color: '#22c55e' }}>✓</span> Villa Hygiene Package
                            </h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555' }}>
                                {['Water Tank Cleaning', 'Pest Control', 'Deep Cleaning'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ ...cardStyle }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                                <span style={{ color: '#22c55e' }}>✓</span> Family-Friendly Move Day
                            </h3>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem', color: '#555' }}>
                                {['Babysitting at Home', 'Pet Grooming (doorstep)'].map((item, i) => (
                                    <li key={i} style={{ ...bulletDotStyle, fontSize: '0.95rem' }}>
                                        <span style={{ color: 'var(--muted-gold)', fontSize: '0.6rem', flexShrink: 0 }}>●</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>(We tailor bundles based on your home size and timeline.)</p>
                </div>
            </section>

            {/* Quick FAQs */}
            <section className="section" style={{ background: '#f9f9f9' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 600 }}>Quick FAQs</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { q: "Are these services performed by Box & Beyond?", a: "These services are delivered by vetted partner suppliers under our coordination model. We manage scheduling, confirmations, and service follow-up." },
                            { q: "Can you do these on the same day as the move?", a: "Sometimes yes, depending on timing and service type. We'll recommend the best sequence for results." },
                            { q: "Do I pay in advance?", a: "Some services may require advance payment or a booking confirmation depending on supplier policy. We confirm this before scheduling." }
                        ].map((faq, i) => (
                            <div key={i} style={{ paddingBottom: '1.25rem', borderBottom: '1px solid #eee' }}>
                                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', fontWeight: 600 }}>{faq.q}</h4>
                                <p style={{ color: '#666', lineHeight: 1.6, fontSize: '0.95rem' }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center', background: '#fafafa' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ready to build your move concierge plan?</h2>
                    <p style={{ marginBottom: '2.5rem', color: '#666' }}>Send your move date + area + home size on WhatsApp, and we&apos;ll recommend the right package and schedule everything around your move.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I'd like to build my move-in package.")} className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            WhatsApp to Book Your Move-In Package
                        </a>
                        <a href="/get-a-quote" className="btn btn-outline" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                            Request Callback
                        </a>
                    </div>
                </div>
            </section>
        </ServicePageLayout>
    );
}
