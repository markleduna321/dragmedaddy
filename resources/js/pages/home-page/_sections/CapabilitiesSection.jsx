import React from 'react';
import { Icon } from './HomeVisuals';

const strengths = [
    {
        title: 'No prompt tax for moving pixels',
        description: 'Drag, arrange, and refine your layout instantly. Save AI for the work where it actually adds value.',
        icon: 'sparkles',
    },
    {
        title: 'AI with guardrails',
        description: 'Scoped styling prompts update Tailwind classes—not your structure, node connections, or underlying application logic.',
        icon: 'shield',
    },
    {
        title: 'Backend logic you can see',
        description: 'Inspect and rewire each step from UI trigger to database action. No hidden scripts or black-box workflows.',
        icon: 'workflow',
    },
    {
        title: 'Your stack, your code',
        description: 'Export a standard Laravel, React, Inertia, and Tailwind codebase—ready to maintain and run on your own terms.',
        icon: 'code',
    },
];

export default function CapabilitiesSection() {
    return (
        <section id="capabilities" className="scroll-mt-8 bg-[#f5f8ff] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
            <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                <div>
                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Built for people who care about the output</span>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">The speed of visual building. The confidence of real code.</h2>
                    <p className="mt-5 text-base leading-7 text-slate-600">
                        Skip repetitive scaffolding without surrendering control. FullStackCanvas keeps the building blocks visible—from the canvas to the compiled application.
                    </p>
                    <div className="mt-7 flex items-center gap-3 rounded-xl border border-blue-100 bg-white p-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-700 text-white">
                            <Icon name="code" className="h-5 w-5" />
                        </span>
                        <div>
                            <p className="text-sm font-bold text-slate-900">One source of truth</p>
                            <p className="mt-1 text-xs leading-5 text-slate-500">Your project schema connects UI, styling, and backend logic.</p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    {strengths.map((strength) => (
                        <article key={strength.title} className="rounded-2xl border border-blue-100/80 bg-white p-5 shadow-sm shadow-blue-950/[0.02] sm:p-6">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                                <Icon name={strength.icon} className="h-5 w-5" />
                            </span>
                            <h3 className="mt-4 text-base font-bold text-slate-900">{strength.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{strength.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
