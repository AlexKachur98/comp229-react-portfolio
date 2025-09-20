/**
 * @file Education.jsx
 * @purpose Displays education timeline/cards
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Clean, resume-like layout (minimalist + professional). ￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼ */
export default function Education() {
    return (
        <section className="section">
            <div className="container flow">
                <h2>Education</h2>

                <div className="edu">
                    <article className="edu__item">
                        <h3>Centennial College — Software Engineering Technology (Co-op)</h3>
                        <p className="muted">2025 — present • GPA: 4.4 / 4.5</p>
                        <p>
                            Focus: Web application development (React & Node.js), databases, software design, and cooperative education experience.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}
