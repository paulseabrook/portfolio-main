import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import NavLink from "@/Components/NavLink";

export default function Guest({ children }) {
    // let href = window.location.href;
    // const validContact = new RegExp(".*/login$");
    // console.log(href);
    // console.log(validContact);
    return (
        <>
            {/* <p>{href === validContact ? `${href}` : `not working`} </p> */}
            <div className="bg-greenie min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 \\">
                <div className="flex">
                    <Link href="/">
                        <ApplicationLogo className="w-30 h-30 fill-current text-gray-500" />
                    </Link>
                    <div className="hidden sm:flex">
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

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </>
    );
}
