import Navigation from "@/Components/Navigation";
import Footer from "@/Components/footer";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";

export default function About({ auth }) {
    return (
        <>
            <Head title="About" />
            <div className="bg-blue-50 min-h-screen">
                <Navigation auth={auth} user={auth.user} />
                <main className="max-w-6xl mx-auto pt-4 px-6">
                    {/* Flex container for side-by-side layout */}
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="rounded-lg overflow-hidden shadow-lg flex-1 max-h-[600px]"
                        >
                            <img
                                src="/build/assets/family.jpeg"
                                alt="Me and my family"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Article Content */}
                        <motion.article
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 rounded-lg shadow-lg flex-1 h-auto max-h-[450px]"
                        >
                            <h1 className="text-3xl font-bold mb-4 text-gray-800">
                                About
                            </h1>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                <strong>Hello! </strong>My name Paul Seabrook
                                and back in 2022, I discovered my passion for
                                coding and decided to transition from my IT
                                career into software development. I completed a
                                12-week coding bootcamp that focused on React,
                                JavaScript, HTML, CSS, SQL, and Node.js.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Since then, I’ve been working as a professional
                                developer for over three years. For the past two
                                years, most of my work has been within the .NET
                                ecosystem, where I primarily use VB.NET, along
                                with CSS, HTML, JavaScript, and SQL in my daily
                                projects.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                I currently live in Greenville, SC, with my wife
                                ad our newborn daughter. Outside of programming,
                                I enjoy spending time with family, attending
                                church, and reading.
                            </p>
                        </motion.article>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
