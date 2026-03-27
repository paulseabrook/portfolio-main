import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";
import { useState } from "react";

export default function Guest({ children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <>
            <div className="bg-greenie min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 ">
                <div className="hidden md:flex">
                    <Link href="/">
                        <ApplicationLogo className="w-30 h-30 fill-current text-gray-500" />
                    </Link>
                    <div className="hidden md:flex">
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
                </div>

                <div className="pl-5 pr-5 ">
                    <div className="flex items-center justify-between md:hidden mr-5">
                        <Link href="/">
                            <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 " />
                        </Link>
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState,
                                )
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-100  focus:outline-none   transition duration-150 ease-in-out"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`
                             ${showingNavigationDropdown ? "opacity-100 max-h-screen flex justify-center items-center" : "opacity-0 max-h-0 overflow-hidden flex justify-center items-center"}
                              min-[500]:hidden bg-greenie
                             transition-all duration-500 ease-in-out
                           `}
                    >
                        <div className="flex flex-col items-center min-[500px]:flex-row justify-start pt-2 pb-3 space-y-1 md:hidden">
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
                    </div>
                    <div className="min-w-[280px] w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
