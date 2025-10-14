import Navigation from "@/Components/Navigation";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Tooltip } from "@mui/material";

const skills = [
    { name: "JavaScript", years: 3 },
    { name: "CSS", years: 3 },
    { name: "HTML", years: 3 },
    { name: "SQL", years: 2 },
    { name: "VB.NET", years: 2 },
    { name: "ASP.NET", years: 2 },
    { name: "PHP", years: 1 },
    { name: "React", years: 1 },
    { name: "Node.js", years: 1 },
];

const maxYears = Math.max(...skills.map((s) => s.years));

const barVariants = {
    hidden: { width: "0%" },
    visible: (years) => ({
        width: `${(years / maxYears) * 100}%`,
        transition: { duration: 2, ease: "easeOut" },
    }),
};

export default function Skills({ auth }) {
    return (
        <>
            <Head title="Skills" />
            <Navigation auth={auth} user={auth.user} />
            <div className="w-full min-h-screen bg-[rgb(178,121,86)] flex flex-col justify-center p-5">
                <div className="max-w-3xl mx-auto w-full p-4 sm:p-6">
                    <h2 className="text-2xl font-bold mb-6 text-center text-white">
                        Skills
                    </h2>
                    <div className="space-y-4">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group relative transition-all duration-300 ease-in-out hover:scale-105"
                            >
                                {/* Glowing hover effect */}
                                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-green-400 to-blue-600 opacity-0 transition-opacity duration-300 ease-in-out blur group-hover:opacity-75" />

                                {/* Skill card content */}
                                <div className="relative rounded-lg p-4">
                                    <div className="flex justify-between text-xs sm:text-sm mb-1">
                                        <span className="font-medium text-white">
                                            {skill.name}
                                        </span>
                                        <span className="text-white">
                                            {skill.years}{" "}
                                            {skill.years === 1
                                                ? "year"
                                                : "years"}
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-200 h-6 sm:h-10 rounded-full overflow-hidden">
                                        <Tooltip
                                            title={`${skill.years} ${
                                                skill.years === 1
                                                    ? "year"
                                                    : "years"
                                            } experience`}
                                            arrow
                                        >
                                            <motion.div
                                                className="h-full bg-gradient-to-r from-green-400 to-blue-600"
                                                custom={skill.years}
                                                initial="hidden"
                                                whileInView="visible"
                                                variants={barVariants}
                                                viewport={{ once: true }}
                                            />
                                        </Tooltip>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
