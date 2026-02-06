'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LeadCapture from '@/components/LeadCapture';

export default function GetAQuotePage() {
  return (
    <main>
      <Navbar theme="dark" />
      <LeadCapture />
      <Footer />
    </main>
  );
}
