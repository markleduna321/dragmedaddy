import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import GuestLayout from '@/components/layout/GuestLayout';
import RegisterFormSection from './_sections/RegisterFormSection';

export default function RegisterPage() {
    const form = useForm({ name: '', email: '', password: '', password_confirmation: '' });
    const submit = (event) => {
        event.preventDefault();
        form.post(route('register'), {
            onFinish: () => form.reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Create an account - FullStackCanvas" />
            <RegisterFormSection form={form} onSubmit={submit} />
        </>
    );
}

RegisterPage.layout = (page) => <GuestLayout>{page}</GuestLayout>;
