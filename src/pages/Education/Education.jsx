/**
 * @file Education.jsx
 * @purpose Displays academic history in a clean, sectioned layout with CTA. 
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Includes Centennial College program details, GPA, highlights, and a 
 * call-to-action button linking to Projects page.
 */
import { Link } from 'react-router-dom';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage.jsx';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage.jsx';
import styles from './Education.module.css';

export default function Education() {
    return (
        <AnimatedPage>
            <div className={`container ${styles.education}`}>
                <div className={styles.media}>
                    <OptimizedImage
                        src="/images/centennial_logo.png"
                        alt="Centennial College logo"
                        width="220"
                        height="70"
                        className={styles.logo}
                    />
                </div>

                <div className="flow">
                    <header>
                        <h2>Education</h2>
                    </header>

                    <section>
                        <h3>Centennial College — Software Engineering Technology (Co-op)</h3>
                        <p className="muted">
                            <time>2025 — Present</time> • GPA: 4.39 / 4.5
                        </p>
                        <p>
                            A comprehensive program focused on web application development (React & Node.js),
                            software design, databases, and cooperative education. My coursework and projects
                            have sharpened both my technical expertise and collaborative skills.
                        </p>
                        <ul>
                            <li>Developed console-based games in C# applying OOP principles.</li>
                            <li>Built full-stack web applications using React and Node.js.</li>
                            <li>Created and documented UML diagrams, SRS deliverables, and system models.</li>
                            <li>Collaborated on team projects using Agile methodology.</li>
                            <li>Gained strong foundation in QA, version control (Git), and DevOps concepts.</li>
                        </ul>
                    </section>

                    <div className={styles.cta}>
                        <Link to="/projects" className="btn btn--primary">
                            View Projects
                        </Link>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
}
