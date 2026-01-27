'use client';

import { motion } from 'framer-motion';
import {
    FileText,
    CheckCircle,
    AlertCircle,
    Building,
    Clock,
    Truck,
    MapPin,
    MessageCircle,
    Phone,
} from 'lucide-react';
import { whatsAppUrl } from '@/lib/site-config';

export default function AccessContent() {
    return (
        <>
            <section
                style={{
                    paddingTop: '150px',
                    paddingBottom: '80px',
                    background: 'var(--soft-grey)',
                    textAlign: 'center',
                }}
            >
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                            fontWeight: 700,
                            marginBottom: '1rem',
                            color: 'var(--text-dark)',
                        }}
                    >
                        Moving Day Access & Building Permit Help
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: '1.2rem',
                            maxWidth: '700px',
                            margin: '0 auto 2rem',
                            color: '#555',
                            lineHeight: 1.6,
                        }}
                    >
                        Dubai moves aren&apos;t hard because of distance — they&apos;re hard because of building access.
                        Lift bookings, loading bays, security check-ins, parking limitations, and community rules can delay a move and increase stress. This page helps you plan properly so your move stays smooth.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <a href={whatsAppUrl("Hi, I need move-day guidance. Building:")} className="btn btn-primary" style={{ padding: '1rem 1.5rem' }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                <MessageCircle size={18} /> WhatsApp for Move-Day Guidance
                            </span>
                        </a>
                        <a href="/#contact" className="btn btn-outline" style={{ padding: '1rem 1.5rem', background: 'white' }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Phone size={18} /> Request Callback
                            </span>
                        </a>
                    </motion.div>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#777', maxWidth: '560px', margin: '1.5rem auto 0' }}>
                        Note: Permit and access requirements vary by building and community. The customer/building management typically arranges approvals. Box &amp; Beyond can guide you on what to prepare and how to avoid delays.
                    </p>
                </div>
            </section>

            {/* Why access planning matters */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Why access planning matters in Dubai</h2>
                    <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                        Most move-day problems come from:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {[
                            'No lift booking / wrong time slot',
                            'Truck can\'t park near the entrance (long carry)',
                            'Security requires documents or approvals',
                            'Restricted move timings (especially in towers)',
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <AlertCircle size={20} color="var(--muted-gold)" /> {item}
                            </li>
                        ))}
                    </ul>
                    <p style={{ marginTop: '1.5rem', fontWeight: 500 }}>
                        A few minutes of planning before moving day can save hours.
                    </p>
                </div>
            </section>

            {/* What we can help with */}
            <section className="section" style={{ background: 'var(--soft-grey)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>What we can help you with</h2>
                    <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1rem' }}>
                        We guide you on:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {[
                            'What details to share with your building management',
                            'What to ask for (lift slot, loading bay access, visitor entry rules)',
                            'How much time to reserve for the move window',
                            'How to reduce waiting time by preparing access in advance',
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                                <CheckCircle size={20} color="var(--muted-gold)" style={{ flexShrink: 0, marginTop: 2 }} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#666' }}>
                        We don&apos;t issue permits on behalf of buildings — but we&apos;ll help you understand what&apos;s
                        typically required and how to prepare.
                    </p>
                </div>
            </section>

            {/* Checklist + Documents */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FileText color="var(--muted-gold)" /> Moving permit & access checklist
                            </h2>
                            <ol style={{ paddingLeft: '1.25rem', color: '#555', lineHeight: 1.8 }}>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong>Confirm building rules</strong> — Are moves allowed on your preferred day/time?
                                    Is there a moving window (e.g. 2–4 hours)? Are weekends or evenings restricted?
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong>Reserve lift / service elevator</strong> — Book the service lift, confirm size
                                    limits for large furniture, and whether padding is required.
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong>Parking & loading access</strong> — Where can the truck park? Is basement
                                    access allowed? How far is the entrance from the loading area?
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong>Security check-in</strong> — ID requirements for movers? Security deposit or
                                    move fee? Forms required?
                                </li>
                                <li>
                                    <strong>Access at both locations</strong> — Confirm the same for pick-up and
                                    drop-off. Many moves go wrong because the drop-off wasn&apos;t prepared.
                                </li>
                            </ol>
                        </div>
                        <div style={{ background: '#f9f9f9', padding: '2.5rem', borderRadius: '24px', border: '1px solid #eee' }}>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Building color="var(--muted-gold)" /> Documents typically required
                            </h2>
                            <p style={{ color: '#666', marginBottom: '1rem', fontSize: '0.95rem' }}>
                                You (tenant/owner) usually submit:
                            </p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                {['Ejari (tenants)', 'Title Deed (owners)', 'Passport / Visa copies', 'Security deposit receipt (if applicable)'].map(
                                    (item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                            <CheckCircle size={18} color="green" /> {item}
                                        </li>
                                    )
                                )}
                            </ul>
                            <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
                                We send you: Trade License, Insurance, Vehicle Registration (if needed) for building
                                management.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Community types */}
            <section className="section" style={{ background: 'var(--soft-grey)' }}>
                <div className="container" style={{ maxWidth: '860px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Community / building access</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #eee' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Building size={20} color="var(--muted-gold)" /> Towers
                            </h3>
                            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '0.75rem' }}>
                                Marina, Downtown, Business Bay, JLT, etc. Typically need:
                            </p>
                            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: '#555' }}>
                                <li>• Lift booking</li>
                                <li>• Loading bay access</li>
                                <li>• Strict timing windows</li>
                                <li>• Security check-in</li>
                            </ul>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #eee' }}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <MapPin size={20} color="var(--muted-gold)" /> Villas / townhouses
                            </h3>
                            <p style={{ fontSize: '0.95rem', color: '#666', marginBottom: '0.75rem' }}>
                                Dubai Hills, DAMAC Hills, Arabian Ranches, etc. Typically need:
                            </p>
                            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: '#555' }}>
                                <li>• Parking near villa entrance</li>
                                <li>• Gate / community entry process</li>
                                <li>• Extra care for large furniture</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What can change quote/timeline */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>What can change the quote or timeline</h2>
                    <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1rem' }}>
                        These factors can increase move time and manpower:
                    </p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#555', lineHeight: 1.8 }}>
                        <li>Stairs or no lift</li>
                        <li>Small lift requiring extra trips</li>
                        <li>Long carry from truck to entrance</li>
                        <li>Waiting due to lift slot delays or access not granted</li>
                        <li>Restricted move hours that force compressed execution</li>
                    </ul>
                    <p style={{ marginTop: '1.5rem', fontWeight: 500 }}>
                        If you share building access details upfront, we can plan properly and reduce surprises.
                    </p>
                </div>
            </section>

            {/* What to send on WhatsApp */}
            <section className="section" style={{ background: 'var(--deep-charcoal)', color: 'white' }}>
                <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>What to send us on WhatsApp</h2>
                    <p style={{ opacity: 0.9, marginBottom: '1.5rem' }}>
                        To help you quickly, send:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'left' }}>
                        {[
                            'Building / community name',
                            'Pickup & drop-off locations',
                            'Floor number + lift availability',
                            'Preferred date / time',
                            'Any building rules you\'ve received (screenshot is fine)',
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                                <Truck size={18} color="var(--muted-gold)" /> {item}
                            </li>
                        ))}
                    </ul>
                    <p style={{ marginTop: '1.5rem', opacity: 0.85 }}>
                        We&apos;ll reply with what to arrange and the best move-day plan.
                    </p>
                </div>
            </section>

            {/* FAQs */}
            <section className="section" style={{ background: 'var(--soft-grey)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>FAQs</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            {
                                q: 'Do you arrange the permit for me?',
                                a: 'Typically, building permits are arranged by the tenant/owner through building management. We guide you on what to ask for and what to prepare.',
                            },
                            {
                                q: 'What if my building doesn\'t allow moving at certain hours?',
                                a: 'We\'ll work within the permitted windows and recommend the best slot.',
                            },
                            {
                                q: 'What if the lift isn\'t booked or access is delayed?',
                                a: 'Delays can impact timing. We recommend confirming access ahead of time to avoid waiting.',
                            },
                            {
                                q: 'Do you need a service elevator?',
                                a: 'Not always, but it helps reduce delays and protects common areas.',
                            },
                        ].map((faq, i) => (
                            <div
                                key={i}
                                style={{
                                    background: 'white',
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    border: '1px solid #eee',
                                }}
                            >
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>{faq.q}</h4>
                                <p style={{ color: '#666', lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Need help planning access for your move?</h2>
                    <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                        Send your building name and move date on WhatsApp — we&apos;ll guide you through the best way to
                        prepare.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I need move-day guidance. Building:")} className="btn btn-primary" style={{ padding: '1rem 1.5rem' }}>
                            WhatsApp for Move-Day Guidance
                        </a>
                        <a href="/#contact" className="btn btn-outline" style={{ padding: '1rem 1.5rem' }}>
                            Request Callback
                        </a>
                    </div>
                    <p style={{ marginTop: '1.5rem', fontSize: '1rem' }}>
                        <a href="/moving-permit-emaar-dubai" style={{ color: 'var(--muted-gold)', fontWeight: 500 }}>
                            Moving to an Emaar property? → View Emaar Permit Guide
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
}
