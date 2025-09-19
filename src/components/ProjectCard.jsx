/**
 * @file ProjectCard.jsx
 * @purpose Reusable project card with hover elevation + actions
 * @description Displays project image, summary, tags, and buttons for Live/GitHub/details. Uses keyboard focus states for accessibility.
 */
import { Link } from 'react-router-dom'

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {string} summary
 * @property {string[]} tags
 * @property {string} [image]
 * @property {string} [details]
 * @property {string} [demo]
 * @property {string} [github]
 */

/**
 * @param {Project} props
 * @returns {JSX.Element}
 */
export default function ProjectCard({ id, title, summary, tags = [], image, demo, github }) {
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
                    {github && <a className="btn" href={github} target="_blank" rel="noreferrer">GitHub</a>}
                </div>
            </div>
        </article>
    )
}
