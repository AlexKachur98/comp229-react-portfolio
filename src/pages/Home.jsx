/** @file Home.jsx
 *  @purpose Landing page with welcome + mission + CTA to About/Projects. 
 *  @mission Provide a quick intro and clear next steps for users (About/Projects). 
 *  @author Alex Kachur
 *  @since 2025-09-17
 */

import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <section className="home-hero">
            {/* Hero Intro */}
            <div className="hero-content">
                <img
                    src="/logo.svg"
                    alt="Alex Kachur logo"
                    width="80"
                    height="80"
                    style={{ marginBottom: '1rem' }}
                />
                <h1>Hi, I’m <span className="highlight">Alex Kachur</span></h1>
                <h2>Aspiring Full-Stack Developer</h2>
                <p>
                    I’m a Software Engineering Technology student at Centennial College with a passion
                    for building creative, impactful projects. From coding web apps and designing
                    databases to tinkering with custom PCs, I love exploring technology and sharpening
                    my skills every day.
                </p>
                <p className="muted">
                    Mission: To grow into a versatile full-stack developer and bring technical skills
                    together with my passions for gaming, problem-solving, and creativity.
                </p>

                {/* Call-to-Action Buttons */}
                <div className="actions">
                    <Link className="btn primary" to="/about">More About Me</Link>
                    <Link className="btn" to="/projects">See My Projects</Link>
                </div>
            </div>

            {/* Quick snapshot of passions */}
            <div className="hero-passions">
                <h3>What I’m Into</h3>
                <ul>
                    <li>💻 Coding & Web Development</li>
                    <li>🗄️ Databases & Backend APIs</li>
                    <li>🎲 Poker, Video Games & Board Games</li>
                    <li>🖥️ Building Custom PCs</li>
                </ul>
            </div>
        </section>
    )
}
