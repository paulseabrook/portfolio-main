import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import ContactForm from "@/Components/ContactForm";
import Footer from "@/Components/footer";

export default function Contact({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Contact" />
            <h1 className="text-center"> </h1>
            <ContactForm />
            <Footer />
        </AuthenticatedLayout>
    );
}
