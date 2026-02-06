'use client';

import { motion } from 'framer-motion';

export default function LeadCapture() {
  return (
    <section className="section" id="contact" style={{ background: 'white', paddingTop: 'clamp(8rem, 18vw, 12rem)' }}>
      <div className="container" style={{
        background: 'var(--soft-grey)',
        padding: 'clamp(3rem, 10vw, 7rem) clamp(1.5rem, 5vw, 5rem)',
        borderRadius: '0',
        maxWidth: '100%',
        position: 'relative'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ marginBottom: '5rem' }}>
            <span style={{
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--muted-gold)',
              display: 'block',
              marginBottom: '1.5rem'
            }}>
              Concierge Service
            </span>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              fontWeight: 400
            }}>
              Tell us about <br /> your move.
            </h2>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ display: 'grid', gap: 'clamp(1.5rem, 5vw, 2.5rem)' }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(clamp(250px, 100%, 1fr), 1fr))',
              gap: 'clamp(1.5rem, 5vw, 2.5rem)'
            }}>
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
                <option value="residential">Home Moving (Villa/Apartment)</option>
                <option value="single">Single Item Movement</option>
                <option value="commercial">Office & Commercial</option>
                <option value="international">International Relocation</option>
                <option value="addons">Concierge Add-ons Only</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="message">Moving From / Details</label>
              <textarea id="message" rows={4} placeholder="e.g. Marina to Downtown, or Piano movement needed..."></textarea>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1rem' }}>
              <button type="submit" className="btn btn-primary" style={{ padding: '1.4rem 4rem', fontSize: '1rem', width: 'auto' }}>
                Get a Quote in 30 mins
              </button>
              <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#888' }}>
                Our concierge will contact you within 30 minutes.
              </p>
            </div>
          </motion.form>
        </div>
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
      `}</style>
    </section>
  );
}
