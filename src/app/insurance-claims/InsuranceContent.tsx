'use client';

import { motion } from 'framer-motion';
import {
    Shield,
    AlertTriangle,
    CheckCircle,
    FileText,
    Camera,
    Mail,
    MessageCircle,
} from 'lucide-react';

import { siteConfig, whatsAppUrl } from '@/lib/site-config';

export default function InsuranceContent() {
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
                        Insurance & Claims (Box & Beyond)
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        style={{
                            fontSize: '1.2rem',
                            maxWidth: '720px',
                            margin: '0 auto 1.5rem',
                            color: '#555',
                            lineHeight: 1.7,
                        }}
                    >
                        At Box & Beyond, we take a care-first approach to every move: protective packing standards, careful loading, and clear coordination. We also provide coverage options for transit-related incidents and a clear claims process—so expectations are transparent before your move begins.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            background: 'rgba(182, 141, 93, 0.1)',
                            border: '1px solid rgba(182, 141, 93, 0.3)',
                            borderRadius: '12px',
                            padding: '1rem 1.5rem',
                            maxWidth: '640px',
                            margin: '0 auto',
                            fontSize: '0.95rem',
                            color: '#555',
                        }}
                    >
                        <strong>Important:</strong> &quot;Insurance/coverage&quot; is not the same as a blanket promise that everything is automatically covered. Coverage depends on the move type, declared value, packing method, and terms agreed at booking.
                    </motion.div>
                </div>
            </section>

            {/* Coverage Overview */}
            <section className="section">
                <div className="container" style={{ maxWidth: '860px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Shield color="var(--muted-gold)" size={28} /> 1. Coverage Overview
                    </h2>
                    <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                        Depending on your move, we may offer or coordinate:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {[
                            'Goods-in-Transit coverage (transport-related incidents)',
                            'Optional coverage guidance based on declared value and item type',
                            'Additional protection recommendations for fragile/high-value items (e.g., custom packing/crating)',
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                                <CheckCircle size={20} color="var(--muted-gold)" style={{ flexShrink: 0, marginTop: 2 }} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#666', fontStyle: 'italic' }}>
                        Coverage options and terms are confirmed before booking.
                    </p>
                </div>
            </section>

            {/* What's Typically Covered */}
            <section className="section" style={{ background: '#fafafa' }}>
                <div className="container" style={{ maxWidth: '860px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>2. What&apos;s Typically Covered</h2>
                    <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1rem' }}>
                        Coverage may apply to verified incidents that occur during:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {[
                            'Loading and unloading by our crew',
                            'Transport between pickup and drop-off (Goods-in-Transit incidents)',
                            'Verified handling incidents where responsibility is clearly established',
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                                <CheckCircle size={18} color="green" style={{ flexShrink: 0, marginTop: 3 }} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#777' }}>
                        Coverage is assessed case-by-case based on service scope and the agreed terms.
                    </p>
                </div>
            </section>

            {/* What's Not Covered */}
            <section className="section">
                <div className="container" style={{ maxWidth: '860px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <AlertTriangle color="#C53030" size={28} /> 3. What&apos;s Not Covered (Common Exclusions)
                    </h2>
                    <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1rem' }}>
                        To keep expectations clear, coverage typically does <strong>not</strong> apply to:
                    </p>
                    <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', color: '#555', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                            'Pre-existing wear and tear (scratches, dents, weak joints, aging furniture)',
                            'Items packed by the customer (unless damage is clearly caused by handling)',
                            'Damage due to undisclosed access constraints (tight stairs, long carry, lift refusal, restricted access)',
                            'Items with inherent fragility or internal defects (unless declared and packed accordingly)',
                            'Valuables and essentials customers should carry personally (cash, jewelry, passports, documents, keys, laptops, mobile phones)',
                        ].map((item, i) => (
                            <li key={i} style={{ lineHeight: 1.6 }}>{item}</li>
                        ))}
                    </ul>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: '#666' }}>
                        If you&apos;re unsure about an item, tell us before packing—so we can advise on the right packing method and any special handling.
                    </p>
                </div>
            </section>

            {/* Declared Value & High-Value Items */}
            <section className="section" style={{ background: '#fafafa' }}>
                <div className="container" style={{ maxWidth: '860px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>4. Declared Value &amp; High-Value Items (Please Read)</h2>
                    <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1rem' }}>
                        For higher-value or fragile items (artwork, designer pieces, antiques, large TVs, mirrors,
                        specialty items), we recommend you:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {[
                            'Declare the item before move day',
                            'Share photos and any special instructions',
                            'Consider upgraded packing (and crating, if required)',
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                                <CheckCircle size={18} color="var(--muted-gold)" style={{ flexShrink: 0, marginTop: 3 }} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p style={{ marginTop: '1rem', fontSize: '0.95rem', color: '#666' }}>
                        This helps us plan proper protection and advise on suitable coverage.
                    </p>
                </div>
            </section>

            {/* On-the-Day Damage Protocol */}
            <section className="section">
                <div className="container" style={{ maxWidth: '860px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Camera color="var(--muted-gold)" size={28} /> 5. On-the-Day Damage Protocol
                    </h2>
                    <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1rem' }}>
                        If you notice damage during or right after the move:
                    </p>
                    <ol style={{ paddingLeft: '1.25rem', color: '#555', display: 'flex', flexDirection: 'column', gap: '0.5rem', lineHeight: 1.6 }}>
                        <li>Inform the team leader on-site (calmly).</li>
                        <li>Take clear photos/videos.</li>
                        <li>Ensure the item is noted in the job notes (if applicable).</li>
                        <li>Do not worry about &quot;arguing on site.&quot; Our focus is resolution, not conflict.</li>
                    </ol>
                </div>
            </section>

            {/* How to File a Claim */}
            <section className="section" style={{ background: 'var(--deep-charcoal)', color: 'white' }}>
                <div className="container" style={{ maxWidth: '860px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FileText color="var(--muted-gold)" size={28} /> 6. How to File a Claim
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            {
                                step: 'Step 1 — Submit your claim within 24 hours',
                                body: `Contact us via:\nWhatsApp: ${siteConfig.whatsappDisplay}\nEmail: ${siteConfig.claimsEmail}\n\nInclude:\nFull name\nBooking ID / move date\nPickup & drop locations\nDescription of issue\nPhotos/videos of the damage\nIf available: proof of value (invoice/receipt) or an approximate value range.`,
                            },
                            {
                                step: "Step 2 — We confirm assessment within 1 business day",
                                body: "We'll acknowledge your claim and request any missing details.",
                            },
                            {
                                step: 'Step 3 — We provide a resolution plan within 2–3 business days',
                                body: 'Resolution options typically include:\nRepair (preferred where possible)\nReplacement support (where repair isn\'t feasible)\nCompensation (based on declared value, scope, and agreed terms)',
                            },
                            {
                                step: 'Step 4 — Resolution execution',
                                body: 'Minor issues: usually handled quickly\nRepairs: scheduled with the appropriate technician/vendor\nComplex cases: handled with a clear update timeline',
                            },
                        ].map((s, i) => (
                            <div
                                key={i}
                                style={{
                                    background: 'rgba(255,255,255,0.06)',
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                }}
                            >
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--muted-gold)' }}>
                                    {s.step}
                                </h3>
                                <p style={{ opacity: 0.9, lineHeight: 1.7, margin: 0, whiteSpace: 'pre-line' }}>{s.body}</p>
                            </div>
                        ))}
                    </div>
                    <p style={{ marginTop: '2rem', fontSize: '0.95rem', opacity: 0.85 }}>
                        If the move involved a partner fulfillment team under Box & Beyond coordination, you still file
                        the claim with Box & Beyond. We manage resolution and handle partner accountability internally.
                    </p>
                </div>
            </section>

            {/* Resolution Standards */}
            <section className="section" style={{ background: '#fafafa' }}>
                <div className="container" style={{ maxWidth: '860px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>7. Resolution Standards (Our Commitment)</h2>
                    <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                        We aim to resolve claims fairly and quickly:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {[
                            'Minor issues: plan within 48 hours',
                            'Repairable items: schedule within 3–7 days (depending on vendor availability)',
                            'Complex cases: resolution plan within 7 days',
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                                <CheckCircle size={20} color="var(--muted-gold)" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Tips to Prevent Issues */}
            <section className="section">
                <div className="container" style={{ maxWidth: '860px' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>8. Tips to Prevent Issues (Recommended)</h2>
                    <p style={{ color: '#666', lineHeight: 1.7, marginBottom: '1rem' }}>
                        These steps reduce risk and improve quote accuracy:
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {[
                            'Share photos/video walkthrough before the move',
                            'Declare fragile/high-value items in advance',
                            'Confirm lift booking/parking access ahead of time',
                            'Keep valuables/documents with you',
                        ].map((item, i) => (
                            <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                                <CheckCircle size={18} color="green" style={{ flexShrink: 0, marginTop: 3 }} />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* FAQs */}
            <section className="section" style={{ background: '#fafafa' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2.5rem' }}>
                        9. Frequently Asked Questions
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            {
                                q: 'Is everything automatically insured?',
                                a: 'Coverage depends on the move type, declared value, packing method, and agreed terms. We confirm options before booking.',
                            },
                            {
                                q: 'What if I packed the item myself?',
                                a: 'Customer-packed items are generally not covered unless damage is clearly due to handling.',
                            },
                            {
                                q: 'Do you cover delays?',
                                a: 'If delays occur due to access restrictions, lift booking issues, or customer readiness, they may not qualify for service credits. We clarify service commitments and terms at booking.',
                            },
                            {
                                q: 'What happens if a partner executed the job?',
                                a: 'You still contact Box & Beyond. We coordinate resolution.',
                            },
                            {
                                q: 'How long does a claim take?',
                                a: 'Most claims are assessed within 1 business day, with a resolution plan typically provided within 2–3 business days.',
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
                                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 600 }}>
                                    {faq.q}
                                </h4>
                                <p style={{ color: '#666', lineHeight: 1.6, margin: 0 }}>{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center', background: 'var(--soft-grey)' }}>
                <div className="container">
                    <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Need to file a claim now?</h2>
                    <p style={{ marginBottom: '2rem', color: '#666', maxWidth: '560px', margin: '0 auto 2rem' }}>
                        Message us on WhatsApp with your Booking ID + photos/videos + move date and we&apos;ll guide you immediately.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a
                            href={whatsAppUrl("Hi, I need to file a claim. Booking ID:")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '1rem 1.5rem',
                                fontSize: '1rem',
                                textDecoration: 'none',
                            }}
                        >
                            <MessageCircle size={20} /> WhatsApp Claims Support
                        </a>
                        <a
                            href={`mailto:${siteConfig.claimsEmail}?subject=Claims%20Support%20–%20Box%20%26%20Beyond`}
                            className="btn btn-outline"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '1rem 1.5rem',
                                fontSize: '1rem',
                                textDecoration: 'none',
                            }}
                        >
                            <Mail size={20} /> Email Claims Support
                        </a>
                    </div>
                    <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#888' }}>
                        Email: <a href={`mailto:${siteConfig.claimsEmail}`} style={{ color: 'var(--muted-gold)', fontWeight: 500 }}>{siteConfig.claimsEmail}</a>
                    </p>
                </div>
            </section>
        </>
    );
}
