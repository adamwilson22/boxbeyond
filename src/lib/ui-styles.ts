/**
 * Shared UI Design System
 * Consistent card styles, bullet points, spacing across the entire website
 */

export const cardStyle = {
    background: 'white',
    padding: '1.75rem 2rem',
    borderRadius: '16px',
    border: '1px solid #eee',
    boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
};

export const cardStyleCompact = {
    ...cardStyle,
    padding: '1.5rem',
};

export const cardStyleLarge = {
    ...cardStyle,
    padding: '2.5rem',
};

export const bulletStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    fontSize: '0.95rem',
    color: '#555',
    lineHeight: 1.6,
};

export const bulletCheckStyle = {
    ...bulletStyle,
    alignItems: 'center',
};

export const sectionHeadingStyle = {
    fontSize: '2.2rem',
    fontWeight: 600,
    letterSpacing: '-0.02em',
    marginBottom: '1.5rem',
    textAlign: 'center' as const,
};

export const sectionSubheadingStyle = {
    fontSize: '1.1rem',
    color: '#666',
    lineHeight: 1.6,
    textAlign: 'center' as const,
    maxWidth: '700px',
    margin: '0 auto 2rem',
};

export const pricingCardStyle = {
    ...cardStyle,
    textAlign: 'center' as const,
    padding: '2rem',
};

export const serviceCardStyle = {
    ...cardStyle,
    padding: '1.5rem',
    textAlign: 'left' as const,
};

// Standard bullet with dot (no icon)
export const bulletDotStyle = {
    ...bulletStyle,
    alignItems: 'center',
};

// Standard bullet with CheckCircle icon (green)
export const bulletCheckCircleStyle = {
    ...bulletCheckStyle,
};

// Standard bullet with Check icon (gold)
export const bulletCheckGoldStyle = {
    ...bulletCheckStyle,
};
