/**
 * @file ProjectCard.jsx
 * @purpose Reusable card for displaying a project summary.
 * @description Includes a "View Details" link to dynamic route /projects/:id.
 * @autho Alex Kachur
 * @since 2025-09-17
 */

import { Link } from 'react-router-dom'

export default function ProjectCard({ id, title, summary, tags = [], image }) {
    return (
        <article className="card">
            {image && <img src={image} alt={`${title} screenshot`} className="card-img" />}
            <div className="card-body">
                <h3>{title}</h3>
                <p>{summary}</p>

                {!!tags.length && (
                    <ul className="tags">
                        {tags.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                )}

                <Link className="btn" to={`/projects/${id}`}>View Details</Link>
            </div>
        </article>
    )
}
