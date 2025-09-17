/** @file About.jsx
 *  @purpose About Me page.
 */
export default function About() {
    return (
        <article>
            <h2>About Me — Alex Kachur</h2>
            {/* Placeholder headshot for now */}
            <img
                src="https://via.placeholder.com/180x180.png?text=Headshot"
                alt="Alex Kachur headshot"
                width="180"
                height="180"
                style={{ borderRadius: '50%', margin: '0.5rem 0' }}
            />
            <p>
                I’m a Software Engineering Technology student at Centennial College who loves building cool
                projects and sharpening my skills in coding, databases, and web development. Outside of
                class, I’m a huge nerd for poker, video games & board games, and I also enjoy building
                custom PCs. My goal is to grow into a full-stack developer and work on creative, impactful
                projects that combine my technical skills with my passions.
            </p>
            <p>
                <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">
                    Download Resume (PDF)
                </a>
            </p>
        </article>
    )
}
