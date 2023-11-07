import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Contact({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Contact" />
            <h1> Contact </h1>
        </AuthenticatedLayout>
    );
}
