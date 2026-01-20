// resources/js/components/Footer.js
import React from "react";

function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#fff6ec",
                padding: "20px",
                textAlign: "center",
                marginTop: "auto", // Pushes footer to the bottom
            }}
        >
            <p>
                This portfolio was custom built using the Laravel PHP framework
                and React library.
            </p>
        </footer>
    );
}

export default Footer;
