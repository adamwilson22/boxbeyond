/**
 * Central site config — update WhatsApp, social URLs, and trust copy here.
 * Replace placeholders with real values when ready.
 */

export const siteConfig = {
  /** WhatsApp number (E.164, no + or spaces). Update with real number. */
  whatsappNumber: '971500000000',
  /** Display format for Footer etc. */
  whatsappDisplay: '+971 50 000 0000',
  /** "Trusted by X+ residents" — centralised for easy update or future automation */
  trustedByCount: 500,
  /** Claims / insurance contact */
  claimsEmail: 'fahadhussain.fh95@gmail.com',
  /** General contact email */
  contactEmail: 'concierge@boxbeyond.com',
  /** Social links. Replace with real URLs when live. */
  social: {
    instagram: 'https://instagram.com/boxbeyonddubai',
    linkedin: 'https://linkedin.com/company/boxbeyond',
    facebook: 'https://facebook.com/boxbeyonddubai',
  },
} as const;

export function whatsAppUrl(text?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export function trustedByText(suffix = ''): string {
  const base = `Trusted by ${siteConfig.trustedByCount}+ residents`;
  return suffix ? `${base} ${suffix}` : base;
}
