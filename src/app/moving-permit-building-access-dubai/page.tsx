import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import AccessContent from './AccessContent';

export const metadata: Metadata = {
    title: "Moving Permit & Building Access Help in Dubai | Box & Beyond",
    description: "Dubai moving day tips for building access, lift booking, parking, and permit guidance. Learn what to prepare to avoid delays.",
};

export default function AccessPage() {
    return (
        <main>
            <Navbar theme="dark" />
            <AccessContent />
            <Footer />
        </main>
    );
}
