'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

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
                paddingTop: '18rem',
                paddingBottom: '12rem',
                background: 'white',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '100vh'
            }}
        >
            {/* Decorative background element with parallax and mouse follow */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '600px',
                    height: '600px',
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

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        variants={itemVariants}
                        style={{
                            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
                            lineHeight: 1,
                            marginBottom: '2.5rem',
                            maxWidth: '1000px',
                            margin: '0 auto 2.5rem',
                            fontWeight: 400,
                            letterSpacing: '-0.05em',
                        }}
                    >
                        Moving, handled <br />
                        <motion.span
                            initial={{ color: 'var(--foreground)' }}
                            animate={{ color: 'var(--muted-gold)' }}
                            transition={{ delay: 1.5, duration: 1 }}
                            style={{ fontWeight: 500 }}
                        >
                            properly.
                        </motion.span>
                    </motion.h1>

                    <motion.div variants={itemVariants}>
                        <p style={{
                            fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                            color: '#666',
                            maxWidth: '650px',
                            margin: '0 auto 5rem',
                            fontWeight: 300,
                            letterSpacing: '0.01em',
                            lineHeight: 1.6
                        }}>
                            Premium residential and commercial moving services across Dubai and beyond.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        style={{
                            display: 'flex',
                            gap: '2rem',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="https://wa.me/yournumber"
                            className="btn btn-primary"
                            style={{ padding: '1.4rem 3.5rem', borderRadius: '100px' }}
                        >
                            Start Your Journey
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="#contact"
                            className="btn btn-outline"
                            style={{ padding: '1.4rem 3.5rem', borderRadius: '100px' }}
                        >
                            Request Callback
                        </motion.a>
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
        </section>
    );
}
