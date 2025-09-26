/**
 * @file Education.jsx
 * @purpose Displays academic history in a structured timeline. 
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Currently shows Centennial College program with focus areas and GPA. 
 * Future-ready for expansion using a mapped array of entries.
 */
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage.jsx';

export default function Education() {
    const education = [
        {
            school: "Centennial College — Software Engineering Technology (Co-op)",
            date: "2025 — present",
            gpa: "4.4 / 4.5",
            focus: "Web application development (React & Node.js), databases, software design, and cooperative education experience."
        }
    ];

    return (
        <AnimatedPage>
            <div className="container flow">
                <h2>Education</h2>
                {education.map((edu, i) => (
                    <article key={i}>
                        <h3>{edu.school}</h3>
                        <p className="muted">
                            <time>{edu.date}</time> • GPA: {edu.gpa}
                        </p>
                        <p>{edu.focus}</p>
                    </article>
                ))}
            </div>
        </AnimatedPage>
    );
}
