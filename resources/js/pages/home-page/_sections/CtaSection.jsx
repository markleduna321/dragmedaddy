import React from 'react';
import { Link } from '@inertiajs/react';
import { Icon } from './HomeVisuals';

export default function CtaSection() {
    return (
        <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
            <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 px-6 py-12 text-center shadow-2xl shadow-blue-950/15 sm:px-12 sm:py-16">
                <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10" />
                <div className="absolute -right-4 -top-8 h-40 w-40 rounded-full border border-white/10" />
                <div className="absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-blue-500/20 blur-2xl" />
                <div className="relative mx-auto max-w-2xl">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-100 sm:text-xs">
                        <Icon name="sparkles" className="h-4 w-4" /> Build with intent
                    </span>
                    <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">Your next application deserves a better starting point.</h2>
                    <p className="mt-4 text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
                        Go from a visual idea to a codebase you understand, own, and can keep building on.
                    </p>
                    <Link href="/register" className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3.5 text-sm font-bold text-blue-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800">
                        Create your workspace <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
