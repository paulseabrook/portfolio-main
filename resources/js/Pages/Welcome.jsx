import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <div className="bg-greenie flex justify-end items-center">
                {auth.user ? (
                    ""
                ) : (
                    <>
                        <Link
                            href={route("login")}
                            className="font-semibold p-5 text-white hover:text-bluie focus:outline focus:outline-offset-1 focus:rounded-sm "
                        >
                            Log in
                        </Link>

                        <Link
                            href={route("register")}
                            className="ml-4 font-semibold p-5 text-white hover:text-bluie focus:outline focus:outline-offset-1 focus:rounded-sm "
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
            <Head title="Welcome" />
            <div className="sm:flex sm:justify-center flex-col sm:items-center min-h-screen bg-center bg-greenie selection:text-white">
                <div className="p-6 text-right">
                    <div className="hidden sm:-my-px sm:ml-10 sm:flex">
                        <>
                            <Link href="/">
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 " />
                            </Link>
                        </>
                        <>
                            <NavLink
                                href={route("projects")}
                                active={route().current("projects")}
                                auth={auth}
                            >
                                Projects
                            </NavLink>
                            <NavLink
                                href={route("skills")}
                                active={route().current("skills")}
                                auth={auth}
                            >
                                Skills
                            </NavLink>

                            <NavLink
                                href={route("about")}
                                active={route().current("about")}
                                auth={auth}
                            >
                                About
                            </NavLink>
                            <NavLink
                                href={route("contact")}
                                active={route().current("contact")}
                                auth={auth}
                            >
                                Contact
                            </NavLink>
                        </>
                    </div>
                </div>

                <div>
                    <img
                        className="h-96 w-full rounded-2xl "
                        src="/build/assets/headshotNoBG.webp"
                        alt="main logo"
                    />
                </div>

                <div className="text-white text-5xl pt-6">
                    <p className="mb-16">Welcome</p>
                </div>
            </div>
        </>
    );
}
