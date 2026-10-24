import React from 'react';
import { Head } from '@inertiajs/react';
import HeaderSection from './_sections/HeaderSection';
import HeroSection from './_sections/HeroSection';
import WorkflowSection from './_sections/WorkflowSection';
import CapabilitiesSection from './_sections/CapabilitiesSection';
import CtaSection from './_sections/CtaSection';
import FooterSection from './_sections/FooterSection';

export default function HomePage() {
    return (
        <main>
            <Head title="FullStackCanvas - Visual Full-Stack Builder" />
            <HeroSection />
            <WorkflowSection />
            <CapabilitiesSection />
            <CtaSection />
        </main>
    );
}

HomePage.layout = (page) => (
    <div className="min-h-screen overflow-hidden bg-white text-slate-900">
        <HeaderSection />
        {page}
        <FooterSection />
    </div>
);
