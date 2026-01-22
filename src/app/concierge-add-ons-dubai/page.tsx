import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import ConciergeContent from './ConciergeContent';

export const metadata: Metadata = {
    title: "Move-In & Move-Out Concierge Services in Dubai | Box & Beyond",
    description: "Book move-in and move-out concierge add-ons in Dubai: deep cleaning, pest control, AC cleaning, painting, handyman, and more. One coordinator for all your needs.",
};

export default function ConciergePage() {
    return (
        <main>
            <Navbar theme="dark" />
            <ConciergeContent />
            <Footer />
        </main>
    );
}
