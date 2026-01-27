'use client';

import { motion } from 'framer-motion';
import { cardStyle } from '@/lib/ui-styles';

export default function FAQsSection() {
    const faqs = [
        {
            q: "What areas do you serve?",
            a: "We serve Dubai for all residential and commercial moves. For Abu Dhabi / other Emirates / international relocation, we quote separately based on scope and access."
        },
        {
            q: "Do you move apartments, villas, and offices?",
            a: "Yes. We handle apartment moves, villa/townhouse moves, and office & commercial relocations—with packing, transport, and placement based on your selected scope."
        },
        {
            q: "Can I get a quote on WhatsApp?",
            a: "Yes. WhatsApp is the fastest way. Share: home size (studio/1BR/2BR/villa), pickup & drop locations, move date, photos/video walkthrough (recommended) …and we'll reply with a clear quote."
        },
        {
            q: "Do you provide packing and packing materials?",
            a: "Yes. We offer partial packing or full packing, and can provide boxes, bubble wrap, tape, and protective materials depending on your needs."
        },
        {
            q: "How do you avoid hidden costs?",
            a: "We confirm scope upfront and ask the right questions (lift access, stairs, long carry, bulky items). If anything changes on-site (extra items, access issues), we'll explain it before proceeding."
        },
        {
            q: "What affects the moving price the most?",
            a: "Main factors are: home size and volume, packing level (none/partial/full), access (lift/stairs/parking/long carry), distance and timing (weekends/end-of-month are busier), dismantling/reassembly requirements."
        },
        {
            q: "Do you handle dismantling and reassembly?",
            a: "We can help with basic dismantling and reassembly (beds, tables, wardrobes) as an add-on. Share what you have and we'll include it in the quote."
        },
        {
            q: "Do you arrange building permits and lift booking?",
            a: "Building approvals and lift bookings are typically arranged by the tenant/owner through building management. We can guide you on what to ask and how to prepare to avoid move-day delays."
        },
        {
            q: "Is my move insured?",
            a: "We provide guidance on coverage options depending on your move type and declared value. Terms and scope are explained before booking. You can review details on our Insurance & Claims page."
        },
        {
            q: "Can you do single-item moves?",
            a: "Yes—within Dubai. Single-item moves are ideal for a sofa, bed, appliance, or one bulky item. If there's more than one item, the price differs because time and manpower increase."
        },
        {
            q: "Do you offer storage?",
            a: "Yes. We coordinate secure storage through partner facilities. Pricing depends on unit size and duration, and storage is typically paid in advance."
        },
        {
            q: "Can you help with move-in / move-out services?",
            a: "Yes. Through our Concierge Add-ons, we can coordinate trusted partners for deep cleaning, pest control, AC cleaning, handyman work, painting, curtains, pet grooming, and more—so your home is move-in ready (or move-out ready for deposit return)."
        }
    ];

    return (
        <section className="section" style={{ background: '#fafafa' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
                        Homepage FAQs
                    </h2>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {faqs.map((faq, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            style={{ ...cardStyle }}
                        >
                            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: 600, color: 'var(--text-dark)' }}>
                                {faq.q}
                            </h4>
                            <p style={{ color: '#666', lineHeight: 1.7, margin: 0 }}>
                                {faq.a}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
