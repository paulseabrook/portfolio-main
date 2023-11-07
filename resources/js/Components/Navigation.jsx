import { Link } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import Dropdown from "@/Components/Dropdown";

export default function Navigation({ auth, user }) {
    return (
        <div className=" sm:items-center bg-center bg-greenie selection:text-white">
            <div className="text-right">
                <div className="flex justify-between h-24">
                    <div className="flex items-centered">
                        <Link href="/">
                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 " />
                        </Link>

                        <NavLink
                            href={route("projects")}
                            active={route().current("projects")}
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            href={route("skills")}
                            active={route().current("skills")}
                        >
                            Skills
                        </NavLink>

                        <NavLink
                            href={route("about")}
                            active={route().current("about")}
                        >
                            About
                        </NavLink>
                        <NavLink
                            href={route("contact")}
                            active={route().current("contact")}
                        >
                            Contact
                        </NavLink>
                    </div>
                    <div className="bg-greenie flex justify-end items-center">
                        {
                            // if logged in ..
                            auth.user ? (
                                // add a link to the dashboard
                                <div className="hidden sm:flex sm:items-center sm:ml-6">
                                    <div className="ml-3 relative">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                    >
                                                        {user.name}

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
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
                                                >
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
                                <>
                                    <Link
                                        href={route("login")}
                                        className="font-semibold p-5 text-white hover:text-bluie transition-all duration-300 focus:outline focus:outline-2 focus:rounded-sm "
                                    >
                                        Log in
                                    </Link>

                                    <Link
                                        href={route("register")}
                                        className="ml-4 font-semibold p-5  text-white hover:text-bluie transition-all duration-300 focus:outline focus:outline-2 focus:rounded-sm "
                                    >
                                        Register
                                    </Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
