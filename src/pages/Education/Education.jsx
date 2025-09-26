/**
 * @file Education.jsx
 * @purpose Displays education timeline/cards.
 * @author Alex Kachur
 * @since 2025-09-17
 */
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage.jsx';

export default function Education() {
    return (
        <AnimatedPage>
            <div className="container flow">
                <h2>Education</h2>
                <article>
                    <h3>Centennial College — Software Engineering Technology (Co-op)</h3>
                    <p className="muted">2025 — present • GPA: 4.4 / 4.5</p>
                    <p>
                        Focus: Web application development (React & Node.js), databases, software design, and cooperative education experience.
                    </p>
                </article>
            </div>
        </AnimatedPage>
    );
}