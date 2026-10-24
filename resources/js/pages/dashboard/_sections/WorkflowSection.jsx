import React from 'react';

const stages = [
    { number: '01', title: 'Structure', subtitle: 'Start with the canvas', description: 'Arrange interface elements and reusable blocks visually. Shape the experience before the details.' },
    { number: '02', title: 'Design', subtitle: 'Give your idea its identity', description: 'Apply a theme, refine your styles, or use scoped AI prompts to make the interface feel like yours.' },
    { number: '03', title: 'Backend', subtitle: 'Connect the moving parts', description: 'Map triggers, validation, and database actions into a visible workflow that compiles to real code.' },
];

export default function WorkflowSection() {
    return (
        <section id="building-workflow" aria-labelledby="workflow-heading" className="scroll-mt-8">
            <div className="mb-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-700">The FullStackCanvas approach</p>
                <h2 id="workflow-heading" className="mt-2 text-xl font-bold tracking-tight">One idea. Three connected stages.</h2>
                <p className="mt-2 text-sm text-slate-500">Get to know the workflow while the project builder takes shape.</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
                {stages.map((stage) => (
                    <article key={stage.number} className="rounded-2xl border border-slate-200 bg-white p-6">
                        <div className="flex items-center justify-between">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-xs font-bold text-blue-700">{stage.number}</span>
                            <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400">Coming soon</span>
                        </div>
                        <h3 className="mt-5 text-base font-bold">{stage.title}</h3>
                        <p className="mt-1 text-xs font-medium text-blue-700">{stage.subtitle}</p>
                        <p className="mt-3 text-sm leading-6 text-slate-500">{stage.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
