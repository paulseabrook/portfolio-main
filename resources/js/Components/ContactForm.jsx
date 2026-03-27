// resources/js/components/ContactForm.js (with Tailwind CSS)
import React, { useState } from "react";
import axios from "axios";

import { FaLinkedin, FaGithub } from "react-icons/fa"; // Font Awesome icons

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [isError, setIsError] = useState(false); // Track error state for status message styling

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        setIsError(false);
        try {
            const response = await axios.post("/api/contact", formData);
            setStatus(response.data.message);
            setFormData({ name: "", email: "", message: "" }); // Clear form
        } catch (error) {
            setStatus("Failed to send message.");
            setIsError(true); // Set error state
        }
    };

    const SocialIcons = () => {
        return (
            <div className="flex">
                {/* Example using Font Awesome icons */}
                <a
                    href="https://github.com/paulseabrook"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="pr-2"
                >
                    <FaGithub size={30} color="#3b5998" />
                </a>
                <a
                    href="https://linkedin.com/in/paulwarrenseabrook"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin size={30} color="#0e76a8" />
                </a>
            </div>
        );
    };

    return (
        // Main form container styling
        <div className="w-full min-h-[80vh] bg-[rgb(249,229,216)] flex flex-col p-5">
            <div className="max-w-[31rem] mx-auto w-full p-4 sm:p-6">
                <form
                    onSubmit={handleSubmit}
                    className="p-6 bg-slate-400 shadow-lg max-w-md rounded-lg "
                >
                    <h1
                        htmlFor="name"
                        className="block text-white font-semibold mb-6 text-xl"
                    >
                        Get in touch.
                    </h1>
                    {/* Input field wrapper */}
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-white font-semibold  mb-2"
                        >
                            Your name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                        />
                    </div>

                    {/* Input field wrapper */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-white font-semibold mb-2"
                        >
                            Your email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                        />
                    </div>

                    {/* Input field wrapper */}
                    <div className="mb-6">
                        <label
                            htmlFor="message"
                            className="block text-white font-semibold mb-2"
                        >
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4" // Set a default height
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 resize-none"
                        ></textarea>
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                    >
                        Send Message
                    </button>

                    {/* Status message (dynamically styled) */}
                    {status && (
                        <p
                            className={`mt-4 p-3 rounded-lg text-center font-medium ${
                                isError
                                    ? "bg-red-100 text-red-800"
                                    : "bg-green-100 text-green-800"
                            }`}
                        >
                            {status}
                        </p>
                    )}
                </form>
            </div>
            <SocialIcons />
        </div>
    );
}

export default ContactForm;
