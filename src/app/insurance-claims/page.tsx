import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Metadata } from 'next';
import InsuranceContent from './InsuranceContent';

export const metadata: Metadata = {
    title: "Insurance & Claims | Packers & Movers Dubai – Box & Beyond",
    description: "Learn about Box & Beyond insurance coverage options and how to file a claim. Clear process, timelines, and resolution standards for moving-related incidents in Dubai.",
};

export default function InsurancePage() {
    return (
        <main>
            <Navbar theme="dark" />
            <InsuranceContent />
            <Footer />
        </main>
    );
}
