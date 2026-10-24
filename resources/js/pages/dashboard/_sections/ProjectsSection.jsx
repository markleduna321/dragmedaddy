import React from 'react';
import { Link } from '@inertiajs/react';
import Badge from '@/components/ui/Badge';

export default function ProjectsSection() {
    return (
        <section aria-labelledby="projects-heading" className="rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-6 py-5 sm:px-8">
                <div>
                    <h2 id="projects-heading" className="text-lg font-bold tracking-tight">Your projects</h2>
                    <p className="mt-1 text-xs text-slate-500">A home for what you build next.</p>
                </div>
                <Badge variant="neutral">Project creation coming soon</Badge>
            </div>
            <div className="px-6 py-12 text-center sm:px-8 sm:py-16">
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700">
                    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="6" width="22" height="20" rx="3" /><path d="M5 12h22M12 12v14M9 9h.01M12 9h.01M15 9h.01M17 17h6M17 21h4" /></svg>
                    <span aria-hidden="true" className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-lg border-4 border-white bg-blue-700 text-sm text-white">+</span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">Room for your next big idea.</h3>
                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">Project creation and saved projects are not available yet. Once they are ready, this is where you will create and return to your applications.</p>
                <Link href="#building-workflow" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-700 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-700/10 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2">
                    Explore the building workflow <span aria-hidden="true">&darr;</span>
                </Link>
            </div>
        </section>
    );
}
