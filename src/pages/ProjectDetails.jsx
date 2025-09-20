/**
 * @file ProjectDetails.jsx
 * @purpose Renders the detailed view for a single, dynamic project.
 * @description Uses the `useParams` hook to get the project ID from the URL,
 * then finds and displays the corresponding project's full details.
 * Provides a graceful fallback if no project is found.
 * @author Alex Kachur
 * @since 2025-09-17
 */
import { useParams, Link } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects.js'

export default function ProjectDetails() {
    const { id } = useParams()
    const { data } = useProjects()
    const project = data.find(p => p.id === id)

    if (!project) {
        return (
            <section className="section">
                <div className="container flow">
                    <h2>Project Not Found</h2>
                    <Link className="btn" to="/projects">← Back to Projects</Link>
                </div>
            </section>
        )
    }

    return (
        <section className="section">
            <div className="container flow">
                <h2>{project.title}</h2>
                {project.image && <img className="card-img" src={project.image} alt={`${project.title} screenshot`} />}
                <p>{project.summary}</p>
                {project.details && <p className="muted">{project.details}</p>}

                {!!project.tags?.length && (
                    <ul className="tags">
                        {project.tags.map(tag => <li key={tag} className="tag">{tag}</li>)}
                    </ul>
                )}

                <div className="card__actions">
                    <Link className="btn" to="/projects">← Back</Link>
                    {project.demo && <a className="btn btn--primary" href={project.demo} target="_blank" rel="noreferrer">Live</a>}
                    {project.download && <a className="btn btn--primary" href={project.download} target="_blank" rel="noreferrer">Download</a>}
                    {project.github && <a className="btn" href={project.github} target="_blank" rel="noreferrer">GitHub</a>}
                </div>
            </div>
        </section>
    )
}