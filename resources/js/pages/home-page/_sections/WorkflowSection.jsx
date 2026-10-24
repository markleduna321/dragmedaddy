import React from 'react';
import { Icon } from './HomeVisuals';

const stages = [
    {
        number: '01',
        title: 'Shape the interface',
        description: 'Build your screens on a visual canvas with reusable elements and ready-made blocks. Reposition, refine, and compose without spending a single AI token.',
        icon: 'layers',
        tag: 'Visual structure',
    },
    {
        number: '02',
        title: 'Make it yours',
        description: 'Set a global theme, fine-tune Tailwind styles visually, or use a focused AI prompt to adjust appearance without changing your layout.',
        icon: 'brush',
        tag: 'Hybrid design',
    },
    {
        number: '03',
        title: 'Connect real logic',
        description: 'Wire triggers, validation, database actions, and Inertia responses in a readable node graph—then compile them into maintainable Laravel code.',
        icon: 'workflow',
        tag: 'Backend logic',
    },
];

export default function WorkflowSection() {
    return (
        <>
            <section aria-label="Product principles" className="border-y border-blue-100 bg-white">
                <div className="mx-auto grid max-w-7xl divide-y divide-blue-100 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-10">
                    {[
                        { value: '0 tokens', label: 'spent on visual layout changes' },
                        { value: '3 modes', label: 'to shape your product design' },
                        { value: 'Real code', label: 'compiled for a stack you own' },
                    ].map((item) => (
                        <div key={item.value} className="flex items-center gap-4 py-5 sm:justify-center sm:py-6">
                            <span className="text-xl font-bold tracking-tight text-blue-800 sm:text-2xl">{item.value}</span>
                            <span className="max-w-36 text-xs leading-5 text-slate-500 sm:text-sm">{item.label}</span>
                        </div>
                    ))}
                </div>
            </section>

            <section id="workflow" className="scroll-mt-8 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">A more thoughtful way to build</span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Three stages. One clear path to full stack.</h2>
                        <p className="mt-4 text-base leading-7 text-slate-600">
                            Each stage does what it does best, with a shared project model keeping your structure, styling, and backend in sync.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 lg:grid-cols-3">
                        {stages.map((stage) => (
                            <article key={stage.number} className="group rounded-2xl border border-blue-100 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5 sm:p-7">
                                <div className="flex items-center justify-between">
                                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                                        <Icon name={stage.icon} className="h-5 w-5" />
                                    </span>
                                    <span className="text-sm font-bold tracking-widest text-blue-200">{stage.number}</span>
                                </div>
                                <span className="mt-6 inline-flex rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">{stage.tag}</span>
                                <h3 className="mt-3 text-xl font-bold tracking-tight text-slate-900">{stage.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600">{stage.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
