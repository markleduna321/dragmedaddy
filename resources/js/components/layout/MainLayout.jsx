import React, { useState } from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function MainLayout({ children }) {
    const { auth } = usePage().props;
    const { url } = usePage();
    const [navigationOpen, setNavigationOpen] = useState(false);
    const logout = useForm({});
    const user = auth.user;
    const dashboardActive = url.split('?')[0].split('#')[0] === '/dashboard';

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 lg:pl-64">
            <Link href="#workspace-content" className="sr-only rounded-lg bg-white p-3 text-blue-800 focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50">Skip to content</Link>
            <header className="border-b border-slate-200 bg-white px-5 py-4 lg:hidden">
                <div className="flex items-center justify-between gap-4">
                    <Link href="/" className="rounded text-base font-bold tracking-tight text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">FullStackCanvas</Link>
                    <button type="button" aria-expanded={navigationOpen} aria-controls="workspace-navigation" onClick={() => setNavigationOpen((value) => !value)} className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                        {navigationOpen ? 'Close menu' : 'Open menu'}
                    </button>
                </div>
            </header>
            <aside id="workspace-navigation" className={`${navigationOpen ? 'flex' : 'hidden'} flex-col border-b border-slate-200 bg-white p-5 sm:p-6 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-64 lg:border-b-0 lg:border-r`}>
                <Link href="/" className="hidden items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 lg:flex" aria-label="FullStackCanvas home">
                    <span className="grid h-9 w-9 shrink-0 grid-cols-2 gap-1 rounded-xl bg-blue-700 p-2" aria-hidden="true">
                        {[0, 1, 2, 3].map((item) => <span key={item} className="rounded-sm bg-white" />)}
                    </span>
                    <span className="text-sm font-bold tracking-tight">FullStack<span className="text-blue-700">Canvas</span></span>
                </Link>
                <div className="mt-2 flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 lg:mt-10">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-800" aria-hidden="true">{user.name.slice(0, 1).toUpperCase()}</span>
                    <div className="min-w-0">
                        <p className="truncate text-sm font-bold">{user.name}</p>
                        <p className="text-xs text-slate-500">Personal workspace</p>
                    </div>
                </div>
                <nav aria-label="Workspace navigation" className="mt-7 space-y-2">
                    <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400">Workspace</p>
                    <Link href={route('dashboard')} onClick={() => setNavigationOpen(false)} aria-current={dashboardActive ? 'page' : undefined} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${dashboardActive ? 'bg-blue-700 text-white shadow-lg shadow-blue-700/15' : 'text-slate-600 hover:bg-slate-50'}`}>
                        <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
                        Overview
                    </Link>
                    <Link href="/" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                        <span aria-hidden="true" className="w-4 text-center">&larr;</span> Product home
                    </Link>
                </nav>
                <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-4 lg:mt-auto">
                    <p className="text-xs font-bold text-blue-900">A foundation you own.</p>
                    <p className="mt-2 text-xs leading-5 text-blue-800">Visual structure, thoughtful design, and real backend logic. All in one place.</p>
                </div>
                <div className="mt-5 border-t border-slate-100 pt-5">
                    <p className="truncate text-xs font-medium text-slate-700">{user.name}</p>
                    <p className="mt-1 truncate text-xs text-slate-500" title={user.email}>{user.email}</p>
                    <form onSubmit={(event) => { event.preventDefault(); logout.post(route('logout')); }} className="mt-3">
                        <button type="submit" disabled={logout.processing} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-left text-xs font-medium text-slate-600 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 disabled:cursor-wait disabled:opacity-60">
                            {logout.processing ? 'Logging out...' : 'Log out'}
                        </button>
                    </form>
                </div>
            </aside>
            <div className="border-b border-slate-200 bg-white px-5 py-5 sm:px-8 lg:px-10">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
                    <p className="text-sm font-medium text-slate-500">Workspace <span aria-hidden="true" className="mx-2 text-slate-300">/</span> <span className="text-slate-900">{dashboardActive ? 'Overview' : 'Account'}</span></p>
                    <span className="hidden rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 sm:inline-flex">Personal workspace</span>
                </div>
            </div>
            <main id="workspace-content" tabIndex={-1} className="mx-auto max-w-7xl space-y-8 px-5 py-8 outline-none sm:px-8 sm:py-10 lg:px-10">{children}</main>
        </div>
    );
}
