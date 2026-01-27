'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface TrustPoint {
    icon: ReactNode;
    text: string;
}

interface ServicePageLayoutProps {
    title: string;
    subtitle: string;
    primaryCta: {
        text: string;
        href: string;
    };
    secondaryCta?: {
        text: string;
        href: string;
    };
    trustPoints?: TrustPoint[];
    badges?: Array<{ icon?: ReactNode; text: string; color?: string }>;
    featureBullets?: Array<{ label: string; text: string }>;
    note?: string;
    children: ReactNode;
}

export default function ServicePageLayout({
    title,
    subtitle,
    primaryCta,
    secondaryCta,
    trustPoints,
    badges,
    featureBullets,
    note,
    children
}: ServicePageLayoutProps) {
    return (
        <main>
            <Navbar theme="dark" />

            {/* Hero Section */}
            <section style={{
                paddingTop: '150px',
                paddingBottom: '80px',
                background: 'var(--soft-grey)',
                textAlign: 'center'
            }}>
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            marginBottom: '1.5rem',
                            color: 'var(--text-dark)'
                        }}
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            fontSize: '1.2rem',
                            maxWidth: '700px',
                            margin: '0 auto 3rem',
                            color: '#555',
                            lineHeight: 1.6
                        }}
                    >
                        {subtitle}
                    </motion.p>

                    {/* Badges (optional) */}
                    {badges && badges.length > 0 && (
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
                            {badges.map((badge, i) => (
                                <div key={i} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.4rem',
                                    fontSize: '0.9rem',
                                    color: '#666',
                                    background: 'white',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '20px',
                                    border: '1px solid #eee'
                                }}>
                                    {badge.icon}
                                    <span>{badge.text}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Feature Bullets (optional - for Concierge-style pages) */}
                    {featureBullets && featureBullets.length > 0 && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', textAlign: 'left' }}>
                            {featureBullets.map((bullet, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', maxWidth: '640px' }}>
                                    <span style={{ color: '#22c55e', fontSize: '1.1rem', lineHeight: 1.5, flexShrink: 0, width: '1.25em', textAlign: 'center' }}>✓</span>
                                    <span style={{ lineHeight: 1.5 }}><strong>{bullet.label}</strong> {bullet.text}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
                    >
                        <a href={primaryCta.href} className="btn btn-primary" style={{ padding: '1rem 2rem' }}>
                            {primaryCta.text}
                        </a>
                        {secondaryCta && (
                            <a href={secondaryCta.href} className="btn btn-outline" style={{ padding: '1rem 2rem', background: 'white' }}>
                                {secondaryCta.text}
                            </a>
                        )}
                    </motion.div>

                    {/* Trust Points */}
                    {trustPoints && trustPoints.length > 0 && (
                        <div style={{
                            marginTop: '3rem',
                            display: 'flex',
                            gap: '2rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            color: '#666',
                            fontSize: '0.9rem'
                        }}>
                            {trustPoints.map((point, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--muted-gold)', flexShrink: 0 }}>{point.icon}</span>
                                    <span>{point.text}</span>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Note (optional) */}
                    {note && (
                        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#888' }}>
                            {note}
                        </p>
                    )}
                </div>
            </section>

            {/* Content Sections */}
            {children}

            <Footer />
        </main>
    );
}
