import React from "react";
import SectionTitle from "../../UI/SectionTitle.tsx";

const ResumeViewer: React.FC = () => {
    return (
        <div className='flex flex-col items-center'>
            <SectionTitle title='Resume' />
            <div style={styles.container}>
                <iframe
                    src="https://msnlabs.com/img/resume-sample.pdf"  // Replace with the actual PDF path
                    title="Resume"
                    style={styles.iframe}
                />
            </div>
        </div>
    );
};

// Styles object for the component
const styles = {
    container: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",  // Center the iframe horizontally
        alignItems: "center",      // Center the iframe vertically
        backgroundColor: "black",  // Background color to visually separate the resume
        padding: "20px",           // Padding around the iframe for better appearance
    },
    iframe: {
        width: "100%",
        maxWidth: "900px",         // Maximum width for the iframe, makes it responsive
        height: "100%",
        border: "1px solid #ccc",  // Light border around the iframe for subtle contrast
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  // Subtle shadow for depth effect
        borderRadius: "10px",      // Rounded corners for a modern look
    }
};

export default ResumeViewer;
