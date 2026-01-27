'use client';

import { motion } from 'framer-motion';
import {
    Smartphone,
    Upload,
    Check,
    AlertTriangle,
    MessageCircle,
    Phone,
    ClipboardList,
    Shield,
} from 'lucide-react';
import { whatsAppUrl } from '@/lib/site-config';

export default function EmaarContent() {
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
                        Emaar Moving Permit & Building Access Guide
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
                        Moving into or out of an Emaar-managed community? Lift booking, security check-in, moving
                        windows, and approvals matter. This guide helps you prepare the right way.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <a href={whatsAppUrl("Hi, I need Emaar move guidance. Tower:")} className="btn btn-primary" style={{ padding: '1rem 1.5rem' }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                <MessageCircle size={18} /> WhatsApp for Emaar Move Guidance
                            </span>
                        </a>
                        <a href="/#contact" className="btn btn-outline" style={{ padding: '1rem 1.5rem', background: 'white' }}>
                            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Phone size={18} /> Request Callback
                            </span>
                        </a>
                    </motion.div>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#777', maxWidth: '600px', margin: '1.5rem auto 0' }}>
                        Procedures can vary by building. Always confirm final requirements with your building/community
                        management.
                    </p>
                </div>
            </section>

            {/* Why Emaar moves need planning */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Why Emaar moves need planning</h2>
                    <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1rem' }}>
                        Emaar buildings tend to have:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {[
                            'Structured security and access controls',
                            'Lift / service elevator rules',
                            'Approved moving time slots',
                            'Building management processes that differ by tower',
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                                <Check size={20} color="var(--muted-gold)" /> {item}
                            </li>
                        ))}
                    </ul>
                    <p style={{ marginTop: '1.5rem', fontWeight: 500 }}>
                        A smooth Emaar move comes down to early confirmation and correct paperwork.
                    </p>
                </div>
            </section>

            {/* What "moving permit" usually means */}
            <section className="section" style={{ background: 'var(--soft-grey)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>What &quot;moving permit&quot; usually means</h2>
                    <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1rem' }}>
                        In many Dubai towers it refers to one or more of:
                    </p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#555', lineHeight: 1.8 }}>
                        <li>Approved move-in / move-out request</li>
                        <li>Lift / service elevator booking</li>
                        <li>Security registration for movers (IDs, vehicle plate)</li>
                        <li>Access approvals for loading bay / service entrance</li>
                        <li>Sometimes a refundable deposit or move fee (building-dependent)</li>
                    </ul>
                </div>
            </section>

            {/* Step-by-step */}
            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2.5rem' }}>
                        Step-by-step: How to arrange your Emaar move access
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
                        {[
                            {
                                icon: <Smartphone size={28} color="var(--muted-gold)" />,
                                title: '1. Contact building management early (3–7 days before)',
                                text: 'Ask for the official move-in/move-out procedure, required documents, available time slots, lift booking steps, and any deposits/fees. Contact the management office, front desk, or community app.',
                            },
                            {
                                icon: <Upload size={28} color="var(--muted-gold)" />,
                                title: '2. Reserve your move slot + lift booking',
                                text: 'Confirm the approved move window (start + end), whether a service elevator must be used, if elevator protection is required, and if a building representative must be present. Book a slightly longer slot than you think you need.',
                            },
                            {
                                icon: <ClipboardList size={28} color="var(--muted-gold)" />,
                                title: '3. Prepare access details for security',
                                text: 'Most towers request: tenant/owner name + unit, move date + time, moving company name (Box & Beyond), crew IDs, vehicle plate(s), and a contact number. Submit only what they ask via official channels.',
                            },
                            {
                                icon: <Check size={28} color="var(--muted-gold)" />,
                                title: '4. Confirm loading bay / parking plan',
                                text: 'Where can the truck park? Is basement access allowed? Is there a service entrance? Long carry (truck far from lift) increases time and manpower.',
                            },
                            {
                                icon: <Check size={28} color="var(--muted-gold)" />,
                                title: '5. Repeat for the drop-off building',
                                text: 'Many moves fail because the new building wasn’t prepared. Confirm lift slot, security notified, parking plan, and keys/access cards for the new location.',
                            },
                        ].map((step, i) => (
                            <div
                                key={i}
                                style={{
                                    padding: '1.5rem',
                                    background: 'white',
                                    borderRadius: '16px',
                                    border: '1px solid #eee',
                                }}
                            >
                                <div style={{ marginBottom: '1rem' }}>{step.icon}</div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>{step.title}</h3>
                                <p style={{ color: '#666', lineHeight: 1.6, fontSize: '0.95rem', margin: 0 }}>{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Copy-paste messages */}
            <section className="section" style={{ background: 'var(--soft-grey)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Copy-paste messages for building management</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #eee' }}>
                            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.75rem', color: '#888', textTransform: 'uppercase' }}>
                                Message 1 — Request the official move procedure
                            </h4>
                            <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6, margin: 0, fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                                {`Hello, I'm moving out/in of Unit [XXX] on [DATE]. Please share the official move-in/move-out procedure, required documents, lift booking process, permitted moving hours, and any deposits/fees. Also confirm if a service lift is required and how to reserve the time slot.`}
                            </p>
                        </div>
                        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #eee' }}>
                            <h4 style={{ fontSize: '0.9rem', marginBottom: '0.75rem', color: '#888', textTransform: 'uppercase' }}>
                                Message 2 — Confirm your booked slot + access approval
                            </h4>
                            <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6, margin: 0, fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}>
                                {`Hi, confirming my move schedule for Unit [XXX] on [DATE] from [TIME] to [TIME]. Please confirm the lift booking is approved, where the moving truck should park/load, and if security requires mover IDs/vehicle plate details.`}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What to share with Box & Beyond */}
            <section className="section">
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>What to share with Box & Beyond</h2>
                    <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1rem' }}>
                        Send us on WhatsApp: building/tower name + unit, move date + approved time slot, floor + lift
                        details, parking/loading instructions, and any building rules (screenshots work).
                    </p>
                    <a href={whatsAppUrl("Hi, I need Emaar move guidance. Tower:")} className="btn btn-primary" style={{ padding: '0.8rem 1.5rem' }}>
                        WhatsApp for Emaar Move Guidance
                    </a>
                </div>
            </section>

            {/* Common risks */}
            <section className="section" style={{ background: 'var(--deep-charcoal)', color: 'white' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <AlertTriangle color="var(--muted-gold)" size={28} /> Common Emaar move-day risks
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {[
                            { risk: 'Lift not booked or booked wrong', fix: 'Confirm the slot + service elevator in writing.' },
                            { risk: 'Loading bay not available', fix: 'Confirm loading access and truck parking ahead of time.' },
                            { risk: 'Security blocks crew entry', fix: 'Submit required crew/vehicle details as requested.' },
                            { risk: 'Time window too short', fix: 'Plan for packing/loading + lift waits. Book longer if possible.' },
                        ].map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    background: 'rgba(255,255,255,0.06)',
                                    padding: '1.25rem',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                            >
                                <p style={{ marginBottom: '0.5rem', fontWeight: 600 }}>{item.risk}</p>
                                <p style={{ margin: 0, opacity: 0.9, fontSize: '0.95rem' }}>✓ {item.fix}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Responsibility split */}
            <section className="section" style={{ background: 'var(--soft-grey)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Your responsibility vs ours</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #eee' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Shield size={20} color="var(--muted-gold)" /> Customer / building
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    'Obtaining building approvals / permits',
                                    'Booking elevator / service lift slot',
                                    'Arranging access cards/keys',
                                    'Confirming building rules and deposits/fees',
                                ].map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.95rem', color: '#555' }}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #eee' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Check size={20} color="var(--muted-gold)" /> Box & Beyond
                            </h3>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {[
                                    'Guidance on what to request + how to plan',
                                    'Executing the move within approved access windows',
                                    'Careful handling + placement per your instructions',
                                    'Keeping the move organized and efficient',
                                ].map((item, i) => (
                                    <li key={i} style={{ marginBottom: '0.5rem', fontSize: '0.95rem', color: '#555' }}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>FAQs</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            {
                                q: 'Do you arrange Emaar moving permits for me?',
                                a: 'Typically, tenants/owners arrange building approvals. We guide you on what to request and help you plan properly.',
                            },
                            {
                                q: 'How early should I book the move slot?',
                                a: 'Ideally 3–7 days in advance (earlier for weekends/end-of-month).',
                            },
                            {
                                q: 'What if my building restricts moving hours?',
                                a: 'We schedule within the allowed window and recommend the best time slot.',
                            },
                            {
                                q: 'Do I need to book the lift at both locations?',
                                a: 'Yes — pick-up and drop-off lifts should both be booked if required.',
                            },
                            {
                                q: 'Can you do weekend moves in Emaar buildings?',
                                a: 'Often yes, depending on tower rules and slot availability.',
                            },
                        ].map((faq, i) => (
                            <div
                                key={i}
                                style={{
                                    background: 'var(--soft-grey)',
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
            <section className="section" style={{ textAlign: 'center', background: 'var(--soft-grey)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Need help with your Emaar move?</h2>
                    <p style={{ color: '#666', marginBottom: '1.5rem' }}>
                        Send your tower name + move date + floor + lift slot on WhatsApp and we&apos;ll guide you
                        step-by-step.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href={whatsAppUrl("Hi, I need Emaar move guidance. Tower:")} className="btn btn-primary" style={{ padding: '1rem 1.5rem' }}>
                            WhatsApp for Emaar Move Guidance
                        </a>
                        <a href="/#contact" className="btn btn-outline" style={{ padding: '1rem 1.5rem' }}>
                            Request Callback
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
