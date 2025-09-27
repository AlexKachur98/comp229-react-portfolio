/**
 * @file About.jsx
 * @purpose Expanded professional bio with story, philosophy, and hobbies. 
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Structured with multiple sections for narrative, values, and personality.
 */
import AnimatedPage from '../../components/layout/AnimatedPage/AnimatedPage.jsx';
import OptimizedImage from '../../components/ui/OptimizedImage/OptimizedImage.jsx';
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
                        className={styles.headshot}
                    />
                </div>

                <div className="flow">
                    <header>
                        <h2>About Me</h2>
                    </header>

                    {/* Intro */}
                    <p className="lead">
                        Hi, I’m Alex, a Software Engineering Technology student at Centennial College with a passion for
                        building modern web applications and exploring emerging technologies.
                    </p>

                    {/* Journey */}
                    <section>
                        <h3>My Journey</h3>
                        <p>
                            My love for technology started young, I was the kid taking apart radios and DVDs asking what every part did.
                            During COVID, I rediscovered coding through a free HTML course, and it felt like magic to create something
                            from nothing. That spark grew into a full commitment when I joined Centennial, where I’ve built console
                            games in C#, designed UML diagrams, and developed React applications from the ground up.
                        </p>
                    </section>

                    {/* Philosophy */}
                    <section>
                        <h3>My Philosophy</h3>
                        <p>
                            I believe software should be clean, maintainable, and accessible. I value collaboration and continuous
                            learning, and I embrace challenges with the same competitive spirit I’ve honed in poker and gaming
                            tournaments. My leadership experiences as a team captain have taught me how to guide and support others
                            while striving for excellence.
                        </p>
                    </section>

                    {/* Beyond Coding */}
                    <section>
                        <h3>Beyond Coding</h3>
                        <p>
                            Outside of development, I’m passionate about gaming (video and board), sports (NBA, NFL, MMA),
                            and building custom PCs, from budget builds to high-end water-cooled systems. I’m also a lifelong animal
                            lover; I share my life with two cats, Moura and Simba, and my dream is to one day open an animal rescue ranch.
                        </p>
                    </section>

                    {/* CTA */}
                    <div className={styles.cta}>
                        <a
                            className="btn btn--primary"
                            href="/documents/resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Download Alex Kachur's resume in PDF format"
                        >
                            Download Resume
                        </a>
                        <a
                            className="btn"
                            href="/contact"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
}
