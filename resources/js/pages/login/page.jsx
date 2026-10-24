import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import GuestLayout from '@/components/layout/GuestLayout';
import LoginFormSection from './_sections/LoginFormSection';

export default function LoginPage({ status }) {
    const form = useForm({ email: '', password: '', remember: false });
    const submit = (event) => {
        event.preventDefault();
        form.post(route('login'), {
            onFinish: () => form.reset('password'),
        });
    };

    return (
        <>
            <Head title="Log in - FullStackCanvas" />
            <LoginFormSection form={form} onSubmit={submit} status={status} />
        </>
    );
}

LoginPage.layout = (page) => <GuestLayout>{page}</GuestLayout>;