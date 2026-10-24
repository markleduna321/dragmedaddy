import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import MainLayout from '@/components/layout/MainLayout';
import WelcomeSection from './_sections/WelcomeSection';
import ProjectsSection from './_sections/ProjectsSection';
import WorkflowSection from './_sections/WorkflowSection';

export default function DashboardPage() {
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Dashboard - FullStackCanvas" />
            <WelcomeSection name={auth.user.name} />
            <ProjectsSection />
            <WorkflowSection />
        </>
    );
}

DashboardPage.layout = (page) => <MainLayout>{page}</MainLayout>;
