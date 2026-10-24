import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import TextInput from '@/components/ui/TextInput';

const fields = [
    { name: 'name', label: 'Full name', type: 'text', autoComplete: 'name', placeholder: 'Your full name', maxLength: 255 },
    { name: 'email', label: 'Email address', type: 'email', autoComplete: 'username', placeholder: 'you@example.com', maxLength: 255 },
    { name: 'password', label: 'Password', type: 'password', autoComplete: 'new-password', placeholder: 'Create a password' },
    { name: 'password_confirmation', label: 'Confirm password', type: 'password', autoComplete: 'new-password', placeholder: 'Re-enter your password' },
];

export default function RegisterFormSection({ form, onSubmit }) {
    const [visiblePasswords, setVisiblePasswords] = useState({});
    const { data, setData, errors, processing } = form;

    return (
        <section aria-labelledby="register-heading">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Turn ideas into applications</span>
            <h1 id="register-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Start something great.</h1>
            <p className="mt-3 text-sm leading-6 text-slate-500">Create your account and take the first step toward your next build.</p>
            <form onSubmit={onSubmit} className="mt-8 space-y-5" aria-busy={processing}>
                {fields.map((field, index) => {
                    const id = `register-${field.name}`;
                    const errorId = `${id}-error`;
                    const isPassword = field.type === 'password';
                    const visible = Boolean(visiblePasswords[field.name]);
                    const fieldError = errors[field.name];

                    return (
                        <div key={field.name}>
                            <label htmlFor={id} className="text-sm font-medium text-slate-700">{field.label}</label>
                            <div className="relative">
                                <TextInput id={id} name={field.name} type={isPassword && visible ? 'text' : field.type} autoComplete={field.autoComplete} autoFocus={index === 0} required maxLength={field.maxLength} value={data[field.name]} onChange={(event) => setData(field.name, event.target.value)} disabled={processing} placeholder={field.placeholder} className={`mt-2 !rounded-xl !border-slate-300 !px-4 !py-3 text-sm !shadow-none placeholder:text-slate-400 focus:!border-blue-600 focus:!ring-blue-600 disabled:bg-slate-50 ${isPassword ? '!pr-20' : ''}`} aria-invalid={Boolean(fieldError)} aria-describedby={fieldError ? errorId : undefined} />
                                {isPassword && (
                                    <button type="button" onClick={() => setVisiblePasswords((values) => ({ ...values, [field.name]: !values[field.name] }))} aria-label={`${visible ? 'Hide' : 'Show'} ${field.name === 'password_confirmation' ? 'password confirmation' : 'password'}`} aria-pressed={visible} aria-controls={id} className="absolute inset-y-0 right-2 my-3 rounded-md px-2 text-xs font-medium text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                                        {visible ? 'Hide' : 'Show'}
                                    </button>
                                )}
                            </div>
                            {fieldError && <p id={errorId} role="alert" className="mt-2 text-sm text-red-600">{fieldError}</p>}
                        </div>
                    );
                })}
                <button type="submit" disabled={processing} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/15 transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60">
                    {processing && <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white motion-reduce:animate-none" />}
                    {processing ? 'Creating your account...' : 'Create account'}
                    {!processing && <span aria-hidden="true">&rarr;</span>}
                </button>
            </form>
            <p className="mt-7 text-center text-sm text-slate-500">
                Already have an account?{' '}
                <Link href={route('login')} className="rounded font-bold text-blue-700 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">Log in</Link>
            </p>
        </section>
    );
}
