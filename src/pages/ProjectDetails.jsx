/**
 * @file ProjectDetails.jsx
 * @purpose Displays full details of a single project.
 * @description Captures :id param from URL and shows matching project details.
 * @autho Alex Kachur
 * @since 2025-09-17
 */

import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function ProjectDetails() {
    const { id } = useParams()
    const project = projects.find((p) => p.id === id)

    if (!project) {
        return (
            <section>
                <h2>Project Not Found</h2>
                <Link to="/projects" className="btn">Back to Projects</Link>
            </section>
        )
    }

    return (
        <section>
            <h2>{project.title}</h2>
            <img src={project.image} alt={`${project.title} screenshot`} className="card-img" />
            <p>{project.summary}</p>
            {project.details && <p>{project.details}</p>}
            <ul className="tags">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <Link to="/projects" className="btn">← Back to Projects</Link>
        </section>
    )
}
