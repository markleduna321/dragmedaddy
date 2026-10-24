import React from 'react';
import { Link } from '@inertiajs/react';
import { Icon } from './HomeVisuals';
import NodeCanvas from './NodeCanvas';

export default function HeroSection() {
    return (
        <section className="relative isolate bg-[#f5f8ff]">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_80%_20%,rgba(191,219,254,0.6),transparent_38%),radial-gradient(ellipse_at_5%_85%,rgba(224,231,255,0.55),transparent_32%)]" />
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:px-10 lg:pb-28 lg:pt-24">
                <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-blue-800 shadow-sm sm:text-xs">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                        Visual full-stack building
                    </div>
                    <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem]">
                        From first wireframe to{' '}
                        <span className="text-blue-700">real, production-ready code.</span>
                    </h1>
                    <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                        Design visually. Use AI with guardrails. Connect a real backend. FullStackCanvas turns your ideas into a maintainable Laravel + React application—without the prompt tax or vendor lock-in.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link href="/register" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Start building <Icon name="arrow" className="h-4 w-4" />
                        </Link>
                        <Link href="#workflow" className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-200 bg-white px-5 py-3.5 text-sm font-bold text-blue-900 transition hover:border-blue-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            Explore the workflow <span aria-hidden="true">↓</span>
                        </Link>
                    </div>
                    <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-slate-500 sm:text-sm">
                        <span className="inline-flex items-center gap-2"><Icon name="code" className="h-4 w-4 text-blue-700" /> Your code, ready to export</span>
                        <span className="hidden h-4 w-px bg-blue-200 sm:block" />
                        <span>AI where it helps. Visual control throughout.</span>
                    </div>
                </div>

                <NodeCanvas />
            </div>
        </section>
    );
}
