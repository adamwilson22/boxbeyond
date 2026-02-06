'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, Building2, Shield, Truck, MapPin, HelpCircle, ClipboardList, Mail } from 'lucide-react';

const guides = [
    {
        title: 'Moving Permit & Building Access',
        desc: 'What to prepare for building access, lift booking, parking, and permit requirements on moving day.',
        href: '/moving-permit-building-access-dubai',
        icon: Building2,
        color: '#c9a227',
        height: 'tall',
    },
    {
        title: 'Emaar Moving Permit Guide',
        desc: 'Lift booking, time slots, security check-in, and access planning for Emaar properties.',
        href: '/moving-permit-emaar-dubai',
        icon: FileText,
        color: '#8b6914',
        height: 'short',
    },
    {
        title: 'Insurance & Claims',
        desc: 'Coverage overview, what\'s included, how to file a claim, and resolution standards.',
        href: '/insurance-claims',
        icon: Shield,
        color: '#5c4a0e',
        height: 'medium',
    },
    {
        title: 'How We Move',
        desc: 'Assessment, tailored planning, packing, loading, and placement — the Box & Beyond way.',
        href: '/#process',
        icon: Truck,
        color: '#c9a227',
        height: 'short',
    },
    {
        title: 'Dubai Move Checklist',
        desc: 'A quick checklist: permits, lift booking, packing materials, access details, and move-day essentials.',
        href: '/get-a-quote',
        icon: ClipboardList,
        color: '#8b6914',
        height: 'tall',
    },
    {
        title: 'Permit-to-Placement',
        desc: 'From community permit to final placement — we coordinate every step so you don\'t have to.',
        href: '/#services',
        icon: MapPin,
        color: '#5c4a0e',
        height: 'medium',
    },
    {
        title: 'FAQs',
        desc: 'Common questions about areas we serve, quotes, packing, permits, insurance, and more.',
        href: '/#faqs',
        icon: HelpCircle,
        color: '#c9a227',
        height: 'medium',
    },
    {
        title: 'Contact Us',
        desc: 'Get in touch for quotes, questions, or support. We respond within 30 minutes during business hours.',
        href: '/contact-us',
        icon: Mail,
        color: '#8b6914',
        height: 'short',
    },
];

export default function HelpGuidesPage() {
    return (
        <main>
            <Navbar theme="dark" />
            <section
                className="section"
                style={{
                    paddingTop: 'clamp(8rem, 18vw, 12rem)',
                    paddingBottom: '4rem',
                    background: 'white',
                }}
            >
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginBottom: '3rem' }}
                    >
                        <h1
                            style={{
                                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                                fontWeight: 600,
                                letterSpacing: '-0.03em',
                                color: 'var(--text-dark)',
                                marginBottom: '0.75rem',
                            }}
                        >
                            Help and Guide
                        </h1>
                        <p style={{ fontSize: '1.15rem', color: '#666', maxWidth: '560px', margin: '0 auto', lineHeight: 1.6 }}>
                            Blogs, guides, and everything you need to plan a smooth move in Dubai — permits, access, insurance, and checklists.
                        </p>
                    </motion.div>

                    {/* Pinterest-style masonry grid */}
                    <motion.div
                        className="help-guides-masonry"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        style={{
                            columnCount: 3,
                            columnGap: '1.5rem',
                            padding: '0 0.5rem',
                        }}
                    >
                        {guides.map((guide, i) => {
                            const Icon = guide.icon;
                            const isTall = guide.height === 'tall';
                            const isShort = guide.height === 'short';
                            return (
                                <motion.div
                                    key={guide.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                                    style={{
                                        breakInside: 'avoid',
                                        marginBottom: '1.5rem',
                                        pageBreakInside: 'avoid',
                                    }}
                                >
                                    <Link
                                        href={guide.href}
                                        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
                                    >
                                        <div
                                            style={{
                                                background: 'white',
                                                borderRadius: '16px',
                                                overflow: 'hidden',
                                                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                                border: '1px solid var(--border-color)',
                                                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                                                minHeight: isShort ? '160px' : isTall ? '240px' : '200px',
                                                padding: '1.5rem 1.5rem',
                                                display: 'flex',
                                                flexDirection: 'column',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-4px)';
                                                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0)';
                                                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: '48px',
                                                    height: '48px',
                                                    borderRadius: '12px',
                                                    background: `${guide.color}22`,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginBottom: '1rem',
                                                }}
                                            >
                                                <Icon size={24} color={guide.color} strokeWidth={1.5} />
                                            </div>
                                            <h3
                                                style={{
                                                    fontSize: '1.15rem',
                                                    fontWeight: 600,
                                                    color: 'var(--text-dark)',
                                                    marginBottom: '0.5rem',
                                                    lineHeight: 1.3,
                                                }}
                                            >
                                                {guide.title}
                                            </h3>
                                            <p
                                                style={{
                                                    fontSize: '0.95rem',
                                                    color: '#666',
                                                    lineHeight: 1.6,
                                                    flex: 1,
                                                }}
                                            >
                                                {guide.desc}
                                            </p>
                                            <span
                                                style={{
                                                    fontSize: '0.9rem',
                                                    color: 'var(--muted-gold)',
                                                    fontWeight: 500,
                                                    marginTop: '0.75rem',
                                                    display: 'inline-block',
                                                }}
                                            >
                                                Read more →
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>
            </section>
            <Footer />
        </main>
    );
}
