'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import NextImage from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
    theme?: 'light' | 'dark';
}

const SERVICES_DROPDOWN = [
    { label: 'Home Moving', href: '/services/home-moving' },
    { label: 'Office Moving', href: '/office-relocation-dubai' },
    { label: 'Single Item Moving', href: '/single-item-move-dubai' },
    { label: 'International Relocation', href: '/international-relocation-dubai' },
    { label: 'Storage', href: '/secure-storage-dubai' },
    { label: 'Concierge Add-Ons', href: '/concierge-add-ons-dubai' },
];

const HELP_GUIDE_DROPDOWN = [
    { label: 'Help and Guide', href: '/help-guides' },
    { label: 'Contact Us', href: '/contact-us' },
];

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#', hasDropdown: true, dropdownKey: 'services' },
    { label: 'About Us', href: '/about' },
    { label: 'Insurance and Claims', href: '/insurance-claims' },
    { label: 'Help and Guide', href: '/help-guides', hasDropdown: true, dropdownKey: 'helpGuide' },
];

export default function Navbar({ theme = 'light' }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [helpGuideOpen, setHelpGuideOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
                setServicesOpen(false);
                setHelpGuideOpen(false);
            }
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
                        gap: '1.5rem',
                        alignItems: 'center',
                    }}
                >
                    {NAV_LINKS.map((item) =>
                        item.hasDropdown ? (
                            <div
                                key={item.label}
                                style={{ position: 'relative' }}
                                onMouseEnter={() => {
                                    if (item.dropdownKey === 'services') setServicesOpen(true);
                                    if (item.dropdownKey === 'helpGuide') setHelpGuideOpen(true);
                                }}
                                onMouseLeave={() => {
                                    if (item.dropdownKey === 'services') setServicesOpen(false);
                                    if (item.dropdownKey === 'helpGuide') setHelpGuideOpen(false);
                                }}
                            >
                                {item.dropdownKey === 'services' ? (
                                    <button
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            cursor: 'pointer',
                                            color: useDarkText ? 'var(--deep-charcoal)' : 'white',
                                            fontSize: '0.95rem',
                                            fontWeight: 500,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.25rem',
                                            padding: 0,
                                            fontFamily: 'inherit',
                                        }}
                                    >
                                        {item.label}
                                        <ChevronDown size={16} style={{ opacity: servicesOpen ? 0.7 : 1 }} />
                                    </button>
                                ) : (
                                    <Link
                                        href={item.href}
                                        style={{
                                            color: useDarkText ? 'var(--deep-charcoal)' : 'white',
                                            fontSize: '0.95rem',
                                            fontWeight: 500,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.25rem',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        {item.label}
                                        <ChevronDown size={16} style={{ opacity: helpGuideOpen ? 0.7 : 1 }} />
                                    </Link>
                                )}
                                <AnimatePresence>
                                    {(item.dropdownKey === 'services' ? servicesOpen : item.dropdownKey === 'helpGuide' && helpGuideOpen) && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.2 }}
                                            style={{
                                                position: 'absolute',
                                                top: '100%',
                                                left: 0,
                                                marginTop: '0.5rem',
                                                background: 'white',
                                                borderRadius: '12px',
                                                boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                                                border: '1px solid var(--border-color)',
                                                padding: '0.5rem 0',
                                                minWidth: '220px',
                                                zIndex: 1002,
                                            }}
                                        >
                                            {(item.dropdownKey === 'services' ? SERVICES_DROPDOWN : HELP_GUIDE_DROPDOWN).map((s) => (
                                                <Link
                                                    key={s.href}
                                                    href={s.href}
                                                    style={{
                                                        display: 'block',
                                                        padding: '0.6rem 1.25rem',
                                                        color: 'var(--deep-charcoal)',
                                                        fontSize: '0.9rem',
                                                        textDecoration: 'none',
                                                        transition: 'background 0.2s',
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.background = 'var(--soft-grey)';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.background = 'transparent';
                                                    }}
                                                >
                                                    {s.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link
                                key={item.label}
                                href={item.href}
                                style={{
                                    color: useDarkText ? 'var(--deep-charcoal)' : 'white',
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    transition: 'color 0.3s ease',
                                    textDecoration: 'none',
                                }}
                            >
                                {item.label}
                            </Link>
                        )
                    )}
                    <Link
                        href="/get-a-quote"
                        className="btn btn-primary"
                        style={{
                            padding: '0.7rem 1.5rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            letterSpacing: '0.02em',
                            textDecoration: 'none',
                        }}
                    >
                        Get a Quote
                    </Link>
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
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
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
                            gap: '0.5rem',
                            overflowY: 'auto',
                        }}
                    >
                        <Link
                            href="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--deep-charcoal)', textDecoration: 'none' }}
                        >
                            Home
                        </Link>
                        <div style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.5rem' }}>Services</div>
                        {SERVICES_DROPDOWN.map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ fontSize: '1rem', color: 'var(--deep-charcoal)', paddingLeft: '1rem', textDecoration: 'none' }}
                            >
                                {s.label}
                            </Link>
                        ))}
                        <Link
                            href="/about"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--deep-charcoal)', textDecoration: 'none', marginTop: '0.5rem' }}
                        >
                            About Us
                        </Link>
                        <Link
                            href="/insurance-claims"
                            onClick={() => setIsMobileMenuOpen(false)}
                            style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--deep-charcoal)', textDecoration: 'none' }}
                        >
                            Insurance and Claims
                        </Link>
                        <div style={{ fontSize: '0.85rem', color: '#888', marginTop: '0.5rem' }}>Help and Guide</div>
                        {HELP_GUIDE_DROPDOWN.map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                style={{ fontSize: '1rem', color: 'var(--deep-charcoal)', paddingLeft: '1rem', textDecoration: 'none' }}
                            >
                                {s.label}
                            </Link>
                        ))}
                        <Link
                            href="/get-a-quote"
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
                            Get a Quote
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
