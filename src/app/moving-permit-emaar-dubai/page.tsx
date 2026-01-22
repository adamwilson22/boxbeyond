import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import EmaarContent from './EmaarContent';

export const metadata: Metadata = {
    title: "Emaar Moving Permit Guide Dubai | Lift Booking & Access – Box & Beyond",
    description: "Moving in an Emaar building? Learn how to arrange lift booking, moving time slots, and security permissions.",
};

export default function EmaarPage() {
    return (
        <main>
            <Navbar theme="dark" />
            <EmaarContent />
            <Footer />
        </main>
    );
}
