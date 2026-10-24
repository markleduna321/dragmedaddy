import React from 'react';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900 lg:grid lg:grid-cols-2">
            <aside className="relative isolate overflow-hidden bg-blue-800 px-6 py-8 text-white sm:px-10 md:py-10 lg:flex lg:min-h-screen lg:flex-col lg:justify-between lg:px-16 lg:py-12">
                <div aria-hidden="true" className="absolute -right-32 top-1/4 -z-10 h-96 w-96 rounded-full border border-white/10" />
                <div aria-hidden="true" className="absolute -right-16 top-1/3 -z-10 h-64 w-64 rounded-full border border-white/10" />
                <Link href="/" className="inline-flex w-fit items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-blue-800" aria-label="FullStackCanvas home">
                    <span className="grid h-10 w-10 grid-cols-2 gap-1 rounded-xl bg-white p-2.5" aria-hidden="true">
                        {[0, 1, 2, 3].map((item) => <span key={item} className="rounded-sm bg-blue-700" />)}
                    </span>
                    <span className="text-lg font-bold tracking-tight">FullStackCanvas</span>
                </Link>
                <div className="mx-auto hidden w-full max-w-lg py-14 lg:block">
                    <span className="rounded-full border border-blue-400/40 bg-blue-700/50 px-3 py-1.5 text-xs font-medium uppercase tracking-widest text-blue-100">A better way to build</span>
                    <h2 className="mt-7 text-5xl font-bold leading-tight tracking-tight">
                        Your next big idea.<br /><span className="text-blue-200">Built on your terms.</span>
                    </h2>
                    <p className="mt-6 max-w-sm text-base leading-7 text-blue-100">
                        Bring your interface, design, and backend together. Go from a visual idea to a codebase you own.
                    </p>
                    <ol className="mt-10 space-y-4">
                        {[
                            ['01', 'Shape it visually', 'Compose your interface without the prompt tax.'],
                            ['02', 'Make it yours', 'Refine your design with focused AI assistance.'],
                            ['03', 'Connect and create', 'Turn visible workflows into real application code.'],
                        ].map(([number, title, description]) => (
                            <li key={number} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-blue-100">{number}</span>
                                <div>
                                    <p className="text-sm font-bold">{title}</p>
                                    <p className="mt-1 text-xs leading-5 text-blue-100">{description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
                <p className="hidden text-xs text-blue-200 lg:block">Visual building. Real code. Yours to own.</p>
            </aside>
            <main className="flex items-center justify-center px-6 py-12 sm:px-10 sm:py-16 md:py-20 lg:px-16 lg:py-12">
                <div className="w-full max-w-md">
                    {children}
                    <Link href="/" className="mt-8 inline-flex items-center gap-2 rounded text-xs font-medium text-slate-500 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                        <span aria-hidden="true">&larr;</span> Back to home
                    </Link>
                </div>
            </main>
        </div>
    );
}
