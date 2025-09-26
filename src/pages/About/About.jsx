/**
 * @file About.jsx
 * @purpose Renders the professional bio and introduction page.
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Uses Framer Motion for page transitions and CSS Modules for styling.
 */
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage.jsx';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage.jsx';
import styles from './About.module.css';

export default function About() {
    return (
        <AnimatedPage>
            <div className={`container ${styles.about}`}>
                <div className={styles.media}>
                    <OptimizedImage
                        src="/images/headshot.jpg"
                        alt="Alex Kachur headshot"
                        width="180"
                        height="180"
                        style={{ borderRadius: '50%' }}
                    />
                </div>

                <div className="flow">
                    <h2>About Me</h2>
                    <p className="lead">
                        I’m a Software Engineering Technology student at Centennial College who loves building cool projects
                        and sharpening skills in coding, databases, and web development.
                    </p>
                    <p>
                        Outside of class I’m a huge nerd for poker, video games & board games, and I enjoy building custom PCs.
                        My goal is to grow into a full-stack developer and work on creative, impactful projects that combine my
                        technical skills with my passions.
                    </p>
                    <div className={styles.cta}>
                        <a className="btn btn--primary" href="/documents/resume.pdf" target="_blank" rel="noreferrer">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
}