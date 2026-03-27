import Navigation from "@/Components/Navigation";
import { Link } from "@inertiajs/react";
import { Head } from "@inertiajs/react";
import Footer from "@/Components/footer";

export default function Projects({ auth, active = false, className = "" }) {
    return (
        <>
            <Head title="Project" />
            <Navigation auth={auth} user={auth.user} />
            <div className="w-full h-full bg-slate-500 flex flex-col align-middle justify-center">
                <h1 className="text-white text-2xl text-center p-5 font-bold">
                    Personal Projects
                </h1>
                <div className="flex flex-col items-center justify-center">
                    <div className="flex justify-center items-center flex-col h-1/2 p-5 max-w-4xl">
                        {/* <h3 className="text-white text-md flex align-center justify-center">
                            Portfolio
                        </h3> */}
                        <span className="text-white text-center text-sm">
                            I developed this portfolio as a hands-on learning
                            experience, utilizing the React and Laravel stack to
                            gain proficiency in technologies contrasting with my
                            day-to-day professional experience in ASP.NET.
                            <br></br>
                            <br></br>
                            <span className="text-white text-center text-sm">
                                It incorporates other technologies as well such
                                as Tailwind CSS, Mailgun for emails, and an
                                implementation of the built in Laravel login
                                system.
                            </span>
                            <br></br>
                            <br></br>
                            <a
                                href="https://github.com/paulseabrook/lerpr"
                                target="_blank"
                                rel="noreferrer"
                                className={
                                    "mt-4 text-white relative text-xl hover:text-bluie w-auto after:block after:bg-bluie after:content-[''] after:absolute after:top-7 after:rounded-2xl after:left:0 after:h-[3px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-bottom inline-flex items-center mx-5 box-border" +
                                    (active
                                        ? "text-white focus:border-indigo-700 h-full "
                                        : "border-transparent text-white   ") +
                                    className
                                }
                            >
                                {" "}
                                See Portfolio Code{" "}
                            </a>{" "}
                        </span>
                    </div>
                    <div className="flex justify-center items-center flex-col h-1/2 p-5 max-w-4xl">
                        <h3 className="text-white text-md flex align-center justify-center">
                            Blackjack
                        </h3>
                        <Link href="https://paulseabrook.github.io/blackjack/">
                            <img
                                src="/build/assets/Blackjack.png"
                                className="rounded-2xl transition-transform duration-500 ease-in-out hover:scale-110"
                            />
                        </Link>{" "}
                        <a
                            href="https://github.com/paulseabrook/blackjack"
                            target="_blank"
                            rel="noreferrer"
                            className={
                                " mt-4 text-white relative text-xl hover:text-bluie w-auto after:block after:bg-bluie after:content-[''] after:absolute after:top-7 after:rounded-2xl after:left:0 after:h-[3px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-bottom inline-flex items-center mx-5 box-border" +
                                (active
                                    ? "text-white focus:border-indigo-700 h-full"
                                    : "border-transparent text-white  focus:text-bluie  ") +
                                className
                            }
                        >
                            {" "}
                            See Blackjack Code{" "}
                        </a>{" "}
                    </div>
                    <div className="flex justify-center items-center flex-col h-1/2 pr-5 pl-5 max-w-4xl">
                        <h3 className="text-white text-md flex align-center justify-center">
                            Lerpr
                        </h3>
                        <span className="text-sm text-white">
                            (Group project no longer in production. Link to code
                            below.)
                        </span>
                        <img
                            src="/build/assets/lerpr.png"
                            className="rounded-2xl"
                        />
                        {/* </Link> */}{" "}
                        <a
                            href="https://github.com/paulseabrook/lerpr"
                            target="_blank"
                            rel="noreferrer"
                            className={
                                "mt-4 text-white relative text-xl hover:text-bluie w-auto after:block after:bg-bluie after:content-[''] after:absolute after:top-7 after:rounded-2xl after:left:0 after:h-[3px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-bottom inline-flex items-center mx-5 box-border" +
                                (active
                                    ? "text-white focus:border-indigo-700 h-full "
                                    : "border-transparent text-white   ") +
                                className
                            }
                        >
                            {" "}
                            See Lerpr Code{" "}
                        </a>{" "}
                    </div>
                    <div className="flex justify-center items-center flex-col h-1/2 pr-5 pl-5 max-w-4xl">
                        <h3 className="text-white text-md flex align-center justify-center">
                            Movie Royale
                        </h3>
                        <span className="text-sm text-white">
                            (Group project no longer in production. Link to code
                            below.)
                        </span>
                        {/* <Link href="https://movie-royale-client.onrender.com/"> */}
                        <img
                            src="/build/assets/MovieRoyale.png"
                            className="rounded-2xl"
                        />
                        {/* </Link> */}{" "}
                        <a
                            href="https://github.com/paulseabrook/movie-royale/tree/main"
                            target="_blank"
                            rel="noreferrer"
                            className={
                                "mt-4 text-white relative text-xl hover:text-bluie w-auto after:block after:bg-bluie after:content-[''] after:absolute after:top-7 after:rounded-2xl after:left:0 after:h-[3px] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-bottom inline-flex items-center mx-5 box-border" +
                                (active
                                    ? "text-white focus:border-indigo-700 h-full"
                                    : "border-transparent text-white  focus:text-bluie  ") +
                                className
                            }
                        >
                            {" "}
                            See Movie Royale Code{" "}
                        </a>{" "}
                    </div>
                    <div className="h-1 w-3/4 bg-white  mb-8 mt-8 rounded-2xl"></div>
                </div>
            </div>
            <Footer />
        </>
    );
}
