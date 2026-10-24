import React from 'react';
import { Link } from '@inertiajs/react';
import { BrandMark, Icon } from './HomeVisuals';

export default function HeaderSection() {
    return (
        <header className="relative z-10 border-b border-blue-100/70 bg-white/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
                <Link href="/" className="flex items-center gap-3" aria-label="FullStackCanvas home">
                    <BrandMark />
                    <span className="text-base font-bold tracking-tight text-slate-950 sm:text-lg">FullStack<span className="text-blue-700">Canvas</span></span>
                </Link>

                <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
                    <Link href="#workflow" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">How it works</Link>
                    <Link href="#capabilities" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">Why FullStackCanvas</Link>
                </nav>

                <div className="flex items-center gap-3">
                    <Link href="/login" className="hidden text-sm font-medium text-slate-700 transition hover:text-blue-700 sm:inline-flex">Log in</Link>
                    <Link href="/register" className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-3.5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-4 sm:text-sm">
                        Get started <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </header>
    );
}
