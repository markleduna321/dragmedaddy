import React from 'react';
import Badge from '@/components/ui/Badge';

export default function WelcomeSection({ name }) {
    return (
        <section aria-labelledby="welcome-heading" className="relative isolate overflow-hidden rounded-3xl bg-blue-800 px-6 py-8 text-white sm:px-10 sm:py-10">
            <div aria-hidden="true" className="absolute -right-16 -top-24 -z-10 h-80 w-80 rounded-full border border-white/10" />
            <div aria-hidden="true" className="absolute -bottom-40 right-16 -z-10 h-80 w-80 rounded-full border border-white/10" />
            <Badge variant="info" className="!bg-white/10 !px-3 !py-1 !text-blue-100">Your next idea starts here</Badge>
            <h1 id="welcome-heading" className="mt-5 break-words text-3xl font-bold tracking-tight sm:text-4xl">Welcome, {name}.</h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">A clear canvas. A thoughtful workflow. A codebase that belongs to you. This is your starting point for building with FullStackCanvas.</p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-blue-100">
                <span>Visual structure</span><span aria-hidden="true">&rarr;</span><span>Guided design</span><span aria-hidden="true">&rarr;</span><span>Real backend logic</span>
            </div>
        </section>
    );
}
