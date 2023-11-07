import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    // function onButtonClickHandler() {
    //     window.alert("Please login to contact");
    // }
    return (
        <Link
            {...props}
            className={
                " text-white relative text-xl w-auto after:block after:bg-bluie after:content-[''] after:absolute after:bottom-8 after:rounded-2xl after:left:0 after:h-[3px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-bottom inline-flex items-center mx-5 box-border" +
                (active
                    ? "text-white focus:border-indigo-700 h-full"
                    : "border-transparent text-white  focus:text-bluie  ") +
                className
            }
            // onClick={onButtonClickHandler()}
        >
            {children}
        </Link>
    );
}
