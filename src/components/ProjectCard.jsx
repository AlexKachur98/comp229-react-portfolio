/**
 * @file ProjectCard.jsx
 * @purpose A reusable card component to display a single project.
 * @description Shows a project's image, title, summary, and tags. Provides
 * action buttons to view details, a live demo, or the GitHub repository.
 * Includes accessibility features like lazy loading images and ARIA labels.
 * @author Alex Kachur
 * @since 2025-09-17
 */
import { Link } from 'react-router-dom'

export default function ProjectCard({ id, title, summary, tags = [], image, demo, github, download }) {
    return (
        <article className="card" tabIndex={0}>
            {image && (
                <div className="card__media">
                    <img src={image} alt={`${title} screenshot`} loading="lazy" />
                </div>
            )}

            <div className="card__body">
                <h3 className="card__title">{title}</h3>
                <p className="muted">{summary}</p>

                {!!tags.length && (
                    <ul className="tags" aria-label="Tech stack">
                        {tags.map(tag => <li key={tag} className="tag">{tag}</li>)}
                    </ul>
                )}

                <div className="card__actions">
                    <Link className="btn" to={`/projects/${id}`}>Details</Link>
                    {demo && <a className="btn btn--primary" href={demo} target="_blank" rel="noreferrer">Live</a>}
                    {download && <a className="btn btn--primary" href={download} target="_blank" rel="noreferrer">Download</a>}
                    {github && <a className="btn" href={github} target="_blank" rel="noreferrer">GitHub</a>}
                </div>
            </div>
        </article>
    )
}