import { Metadata } from 'next';
import ConciergeContent from './ConciergeContent';

export const metadata: Metadata = {
    title: "Move-In & Move-Out Concierge Services in Dubai | Box & Beyond",
    description: "Book move-in and move-out concierge add-ons in Dubai with one coordinator: deep cleaning, pest control, AC cleaning, painting, water tank cleaning, handyman, plumbing, electrical, babysitting, curtains (measure + install) and doorstep pet grooming. Schedule via WhatsApp.",
};

export default function ConciergePage() {
    return <ConciergeContent />;
}
