import React from 'react';
import { Link } from '@inertiajs/react';
import { BrandMark } from './HomeVisuals';

export default function FooterSection() {
    return (
        <footer className="border-t border-blue-100 bg-white">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
                <Link href="/" className="flex items-center gap-2.5" aria-label="FullStackCanvas home">
                    <BrandMark />
                    <span className="text-sm font-bold tracking-tight text-slate-900">FullStack<span className="text-blue-700">Canvas</span></span>
                </Link>
                <p className="text-xs text-slate-500">Visual building. Real code. Yours to own.</p>
                <Link href="/login" className="text-xs font-medium text-blue-700 transition hover:text-blue-900">Log in to your workspace</Link>
            </div>
        </footer>
    );
}
