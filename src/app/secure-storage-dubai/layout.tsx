import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Secure Storage in Dubai | Climate-Controlled Units & Pickup – Box & Beyond',
  description: 'Secure, climate-safe storage in Dubai via vetted partner facilities. Flexible unit sizes, transparent pricing guidance, advance payment plans, and optional pickup/delivery. Get a storage quote on WhatsApp.',
};

export default function SecureStorageLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
