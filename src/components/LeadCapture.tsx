'use client';

import { motion } from 'framer-motion';

export default function LeadCapture() {
    return (
        <section className="section" id="contact" style={{ background: 'white' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', marginBottom: '5rem' }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>Request a Callback</h2>
                    <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '500px', margin: '0 auto' }}>Provide a few details and our concierge team will be in touch to discuss your journey.</p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={{ display: 'grid', gap: '2.5rem' }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                        <div className="input-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="John Doe" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" placeholder="+971 -- --- ----" />
                        </div>
                    </div>

                    <div className="input-group">
                        <label htmlFor="move-type">Move Type</label>
                        <select id="move-type">
                            <option value="">Select move type</option>
                            <option value="residential">Home Moving</option>
                            <option value="commercial">Office & Commercial</option>
                            <option value="international">International Relocation</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <label htmlFor="message">Optional Message</label>
                        <textarea id="message" rows={4} placeholder="Tell us more about your move..."></textarea>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                        <button type="submit" className="btn btn-primary" style={{ padding: '1.4rem 4rem', fontSize: '1rem', width: 'auto' }}>
                            Submit Request
                        </button>
                    </div>
                </motion.form>
            </div>

            <style jsx>{`
        .input-group {
          display: grid;
          gap: 0.8rem;
        }
        label {
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #888;
        }
        input, select, textarea {
          padding: 1.2rem;
          border: none;
          border-bottom: 2px solid #f0f0f0;
          background: transparent;
          font-size: 1.1rem;
          font-family: var(--font-primary);
          transition: var(--transition-fast);
          width: 100%;
          outline: none;
        }
        input:focus, select:focus, textarea:focus {
          border-bottom-color: var(--deep-charcoal);
        }
        select {
          appearance: none;
          border-radius: 0;
        }
        @media (max-width: 768px) {
          form > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
