import Navigation from "@/Components/Navigation";
import { Head } from "@inertiajs/react";

export default function Skills({ auth }) {
    return (
        <>
            <Head title="Skills" />
            <Navigation auth={auth} user={auth.user} />
            <h1>Skills</h1>
        </>
    );
}
