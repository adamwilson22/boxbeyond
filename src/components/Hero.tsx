'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';

export default function Hero() {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

    useEffect(() => {
        mouseX.set((mousePos.x - (typeof window !== 'undefined' ? window.innerWidth : 2000) / 2) / 20);
        mouseY.set((mousePos.y - (typeof window !== 'undefined' ? window.innerHeight : 1000) / 2) / 20);
    }, [mousePos, mouseX, mouseY]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.22, 1, 0.36, 1] as any
            }
        }
    };

    return (
        <section
            ref={containerRef}
            className="section"
            style={{
                textAlign: 'center',
                paddingTop: 'clamp(8rem, 20vw, 18rem)',
                paddingBottom: 'clamp(4rem, 15vw, 12rem)',
                background: 'white',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}
        >
            {/* Decorative background element with parallax and mouse follow */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: 'clamp(300px, 80vw, 600px)',
                    height: 'clamp(300px, 80vw, 600px)',
                    background: 'var(--soft-grey)',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    zIndex: 0,
                    opacity: 0.5,
                    y,
                    x: mouseX,
                    translateY: mouseY
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        style={{
                            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            maxWidth: '1000px',
                            margin: '0 auto 1.5rem',
                            fontWeight: 600,
                            letterSpacing: '-0.03em',
                            color: 'var(--text-dark)'
                        }}
                    >
                        Moving, handled <br />
                        <motion.span
                            initial={{ color: 'var(--text-dark)' }}
                            animate={{ color: 'var(--muted-gold)' }}
                            transition={{ delay: 1.5, duration: 1 }}
                            style={{ fontWeight: 600 }}
                        >
                            properly.
                        </motion.span>
                    </motion.h1>

                    <motion.div variants={itemVariants}>
                        <p style={{
                            fontSize: 'clamp(1.1rem, 4vw, 1.4rem)',
                            color: '#555',
                            maxWidth: '650px',
                            margin: '0 auto 3rem',
                            fontWeight: 400,
                            letterSpacing: '0.01em',
                            lineHeight: 1.6
                        }}>
                            Assessment + Tailored Planning + Permit-to-Placement Coordination.
                            <br />
                            We make your move simple and stress-free.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="hero-btns"
                        style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                flexWrap: 'wrap'
                            }}>
                                <Link
                                    href="https://wa.me/yournumber"
                                    className="btn btn-primary"
                                    style={{
                                        flex: '1 1 auto',
                                        minWidth: '200px',
                                        padding: '1rem 2rem',
                                        fontSize: '1rem'
                                    }}
                                >
                                    Quote in 30 Mins
                                </Link>
                                <Link
                                    href="#contact"
                                    className="btn btn-outline"
                                    style={{
                                        flex: '1 1 auto',
                                        minWidth: '200px',
                                        padding: '1rem 2rem',
                                        fontSize: '1rem'
                                    }}
                                >
                                    Schedule Inspection
                                </Link>
                            </div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2 }}
                                style={{ fontSize: '0.9rem', color: '#666', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '0.5rem' }}
                            >
                                <div style={{ display: 'flex', color: '#FFD700' }}>
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#FFD700" />)}
                                </div>
                                <span style={{ fontWeight: 500 }}>Trusted by 500+ residents in Dubai</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Decorative floating line */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '1px',
                    height: '80px',
                    background: 'linear-gradient(to bottom, var(--border-color), transparent)',
                    zIndex: 1
                }}
            />
        </section >
    );
}
