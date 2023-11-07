import Navigation from "@/Components/Navigation";
import { Head } from "@inertiajs/react";

export default function Projects({ auth }) {
    return (
        <>
            <Head title="Project" />
            <Navigation auth={auth} user={auth.user} />
            <h1>Projects</h1>
        </>
    );
}
