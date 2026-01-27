'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import NextImage from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { whatsAppUrl } from '@/lib/site-config';

interface NavbarProps {
    theme?: 'light' | 'dark';
}

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Help & Guides', href: '/moving-permit-building-access-dubai' },
];

export default function Navbar({ theme = 'light' }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined' && window.innerWidth >= 1024) setIsMobileMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const useDarkText = isScrolled || isMobileMenuOpen || theme === 'dark';

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
                position: 'fixed',
                top: 0,
                width: '100%',
                background: isScrolled || isMobileMenuOpen ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
                backdropFilter: isScrolled || isMobileMenuOpen ? 'blur(10px)' : 'none',
                borderBottom: isScrolled || isMobileMenuOpen ? '1px solid var(--border-color)' : '1px solid transparent',
                zIndex: 1000,
                padding: isScrolled || isMobileMenuOpen ? '1rem 0' : '1.5rem 0',
                transition: 'var(--transition-smooth)',
            }}
        >
            <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link
                    href="/"
                    className="navbar-logo"
                    style={{
                        position: 'relative',
                        zIndex: 1001,
                        display: 'block',
                        width: 'clamp(240px, 22vw, 340px)',
                        height: 'clamp(56px, 6vw, 85px)',
                    }}
                >
                    <NextImage
                        src="/SVG.svg"
                        alt="Box & Beyond Logo"
                        fill
                        style={{ objectFit: 'contain', objectPosition: 'left' }}
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div
                    className="navbar-desktop"
                    style={{
                        display: 'flex',
                        gap: '2.5rem',
                        alignItems: 'center',
                    }}
                >
                    {NAV_LINKS.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            style={{
                                color: useDarkText ? 'var(--deep-charcoal)' : 'white',
                                fontSize: '0.95rem',
                                fontWeight: 500,
                                transition: 'color 0.3s ease',
                            }}
                        >
                            {label}
                        </Link>
                    ))}
                    <a
                        href={whatsAppUrl("Hi, I'd like a quote in 30 minutes.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                            background: 'var(--muted-gold)',
                            color: 'white',
                            padding: '0.7rem 1.5rem',
                            borderRadius: '100px',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            letterSpacing: '0.02em',
                            textDecoration: 'none',
                        }}
                    >
                        Quote in 30 Mins
                    </a>
                </div>

                {/* Mobile: Hamburger */}
                <button
                    type="button"
                    aria-label="Toggle menu"
                    className="navbar-mobile-toggle"
                    onClick={() => setIsMobileMenuOpen((o) => !o)}
                    style={{
                        display: 'none',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 48,
                        height: 48,
                        zIndex: 1001,
                        color: useDarkText ? 'var(--deep-charcoal)' : 'white',
                    }}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="navbar-mobile-menu"
                        aria-hidden={!isMobileMenuOpen}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            top: 0,
                            paddingTop: '100px',
                            paddingBottom: '2rem',
                            paddingLeft: '2rem',
                            paddingRight: '2rem',
                            background: 'white',
                            zIndex: 999,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            overflowY: 'auto',
                        }}
                    >
                        {NAV_LINKS.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 500,
                                    color: 'var(--deep-charcoal)',
                                }}
                            >
                                {label}
                            </Link>
                        ))}
                        <a
                            href={whatsAppUrl("Hi, I'd like a quote in 30 minutes.")}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="btn-primary"
                            style={{
                                marginTop: '1rem',
                                background: 'var(--muted-gold)',
                                color: 'white',
                                padding: '1rem 1.5rem',
                                borderRadius: '100px',
                                fontSize: '1rem',
                                fontWeight: 600,
                                textAlign: 'center',
                                textDecoration: 'none',
                            }}
                        >
                            Quote in 30 Mins
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
