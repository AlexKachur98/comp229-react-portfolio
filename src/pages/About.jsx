/**
 * @file About.jsx
 * @purpose Renders the professional bio and introduction page.
 * @author Alex Kachur
 * @since 2025-09-17
 */
export default function About() {
    return (
        <section className="section">
            <div className="container about">
                <div className="about__media">

                    <img
                        src="/images/headshot.jpg"
                        alt="Alex Kachur headshot"
                        width="180"
                        height="180"
                        style={{ borderRadius: '50%', margin: '0.5rem 0' }}
                    />
                </div>

                <div className="about__content">
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

                    <div className="about__cta">
                        <a className="btn btn--primary" href="/documents/resume.pdf" target="_blank" rel="noreferrer">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}