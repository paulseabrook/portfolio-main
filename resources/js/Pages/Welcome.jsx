import { useState } from "react";
import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import Dropdown from "@/Components/Dropdown";

export default function Welcome({ auth }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <>
            <div className="bg-greenie flex justify-between items-center">
                <div className=" w-full sm:w-auto text-white flex justify-between text-3xl pt-6 pr-6 pl-6">
                    <p className="">Welcome</p>
                    <div className="flex items-center sm:hidden mr-5">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState,
                                )
                            }
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 focus:outline-none transition duration-150 ease-in-out"
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
                </div>
                {auth.user ? (
                    <>
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
                    </>
                ) : (
                    <div className="hidden sm:-my-px sm:flex ">
                        <Link
                            href={route("login")}
                            className=" font-semibold p-5 text-white hover:text-bluie focus:outline focus:outline-offset-1 focus:rounded-sm "
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

            <div
                className={`
    ${showingNavigationDropdown ? "opacity-100 max-h-screen flex justify-center items-center" : "opacity-0 max-h-0 overflow-hidden flex justify-center items-center"}
    sm:hidden bg-greenie flex flex-col
    transition-all duration-500 ease-in-out
  `}
            >
                <div className="flex flex-col items-center min-[400px]:flex-row justify-start pt-2 pb-3 space-y-1">
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
                {auth.user ? (
                    <div className="ml-3 relative flex item-center justify-end">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className=" mr-5 mb-1 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-white hover:bg-bluie focus:outline-none transition ease-in-out duration-150"
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
                ) : (
                    <div className="flex justify-center flex-col items-center">
                        <Link
                            href={route("login")}
                            className=" mt-5 mb-1 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-white hover:bg-bluie focus:outline-none transition ease-in-out duration-150"
                        >
                            Log in
                        </Link>

                        <Link
                            href={route("register")}
                            className="mt-5 mb-1 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-white hover:bg-bluie focus:outline-none transition ease-in-out duration-150"
                        >
                            Register
                        </Link>
                    </div>
                )}
            </div>
            <div className="sm:flex flex-col sm:items-center bg-center bg-greenie selection:text-white">
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
                        <div className="flex justify-center pl">
                            <img
                                className="h-96 min-w-fitrounded-2xl max-w-xs mt-5"
                                src="/build/assets/headshot.jpeg"
                                alt="main logo"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-10">
                        <h1 className="text-white text-6xl">Paul Seabrook</h1>
                        <p className="pt-6 text-white text-2xl">
                            Greenville, SC
                        </p>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}
