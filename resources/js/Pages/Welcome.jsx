import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee);

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <div className="bg-greenie flex justify-between items-center">
                <div className="text-white flex justify-center text-3xl p-6">
                    <p className="">Welcome</p>
                </div>
                {auth.user ? (
                    ""
                ) : (
                    <div>
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
                    </div>
                )}
            </div>
            <Head title="Welcome" />

            <div className="sm:flex pt-10 flex-col sm:items-center min-h-screen bg-center bg-greenie selection:text-white">
                <div className="text-right">
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
                <div className="sm:flex">
                    <div className="">
                        <div>
                            <img
                                className="h-96 w-full rounded-2xl "
                                src="/build/assets/headshotNoBG.webp"
                                alt="main logo"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-10">
                        <h1 className="text-white text-6xl">Paul Seabrook</h1>
                        <p className="pt-6 text-white text-2xl">
                            Greenville, SC
                        </p>
                        <div className="pt-6">
                            <div className="text-white text-xl">
                                864-561-5306{" "}
                            </div>
                            <div className="text-white text-xl">
                                paulwarrenseabrook@gmail.com
                            </div>
                        </div>
                        <div>
                            <div>
                                <FontAwesomeIcon icon="check-square" />
                                Your <FontAwesomeIcon icon="coffee" /> is hot
                                and ready!
                            </div>
                            {/* <a
                                href="https://www.linkedin.com/in/paulwarrenseabrook/"
                                icon="fa-linked-in"
                            ></a> */}
                            {/* <a
                                href="https://github.com/paulseabrook"
                                icon={fa - github}
                            ></a>
                            <a
                                href="mailto:paulwarrenseabrook@gmail.com"
                                className="fa-solid fa-envelope"
                            ></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
