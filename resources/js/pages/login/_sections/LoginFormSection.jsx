import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import TextInput from '@/components/ui/TextInput';

export default function LoginFormSection({ form, onSubmit, status }) {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, errors, processing } = form;
    const inputClass = 'mt-2 !rounded-xl !border-slate-300 !px-4 !py-3 text-sm !shadow-none placeholder:text-slate-400 focus:!border-blue-600 focus:!ring-blue-600 disabled:bg-slate-50';

    return (
        <section aria-labelledby="login-heading">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Your workspace awaits</span>
            <h1 id="login-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Welcome back.</h1>
            <p className="mt-3 text-sm leading-6 text-slate-500">Log in to pick up where your ideas left off.</p>
            {status && <p role="status" className="mt-6 rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-800">{status}</p>}

            <form onSubmit={onSubmit} className="mt-8 space-y-5" aria-busy={processing}>
                <div>
                    <label htmlFor="login-email" className="text-sm font-medium text-slate-700">Email address</label>
                    <TextInput id="login-email" name="email" type="email" autoComplete="username" autoFocus required maxLength={255} value={data.email} onChange={(event) => setData('email', event.target.value)} disabled={processing} placeholder="you@example.com" className={inputClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'login-email-error' : undefined} />
                    {errors.email && <p id="login-email-error" role="alert" className="mt-2 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="login-password" className="text-sm font-medium text-slate-700">Password</label>
                    <div className="relative">
                        <TextInput id="login-password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required value={data.password} onChange={(event) => setData('password', event.target.value)} disabled={processing} placeholder="Enter your password" className={`${inputClass} !pr-20`} aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? 'login-password-error' : undefined} />
                        <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={showPassword ? 'Hide password' : 'Show password'} aria-pressed={showPassword} aria-controls="login-password" className="absolute inset-y-0 right-2 my-3 rounded-md px-2 text-xs font-medium text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    {errors.password && <p id="login-password-error" role="alert" className="mt-2 text-sm text-red-600">{errors.password}</p>}
                </div>
                <label className="flex w-fit items-center gap-2.5 text-sm text-slate-600">
                    <input type="checkbox" name="remember" checked={data.remember} onChange={(event) => setData('remember', event.target.checked)} disabled={processing} className="rounded border-slate-300 text-blue-700 focus:ring-blue-600" />
                    Remember me
                </label>
                <button type="submit" disabled={processing} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-700/15 transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-60">
                    {processing && <span aria-hidden="true" className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white motion-reduce:animate-none" />}
                    {processing ? 'Logging in...' : 'Log in'}
                    {!processing && <span aria-hidden="true">&rarr;</span>}
                </button>
            </form>
            <p className="mt-7 text-center text-sm text-slate-500">
                New to FullStackCanvas?{' '}
                <Link href={route('register')} className="rounded font-bold text-blue-700 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">Create an account</Link>
            </p>
        </section>
    );
}
