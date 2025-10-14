import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";

export default function Welcome({ user, auth, laravelVersion, phpVersion }) {
    return (
        <>
            <div className="bg-greenie flex justify-between items-center">
                <div className="text-white flex justify-center text-3xl p-6">
                    <p className="">Welcome</p>
                </div>
                {auth.user ? (
                    <div className="hidden sm:flex sm:items-center sm:ml-6">
                        <div className="ml-3 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className=" mt-5 mr-5 mb-1 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-white hover:bg-bluie focus:outline-none transition ease-in-out duration-150"
                                        >
                                            {auth.user.name}

                                            <svg
                                                className="ml-2 -mr-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route("profile.edit")}>
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
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
                            <div></div>
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
