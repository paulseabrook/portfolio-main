import Navigation from "@/Components/Navigation";
import { Head } from "@inertiajs/react";

export default function About({ auth }) {
    return (
        <>
            <Head title="About" />
            <Navigation auth={auth} user={auth.user} />
            <h1>About</h1>
        </>
    );
}
