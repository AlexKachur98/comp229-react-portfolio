/**
 * @file ProjectDetails.jsx
 * @purpose Detailed view of a single project, loaded dynamically from params. 
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Handles missing project gracefully with a fallback. Displays image, 
 * details, tags, and action links with accessible labels.
 */
import { useParams, Link } from 'react-router-dom';
import { useProjects } from '../../hooks/useProjects.js';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage.jsx';
import OptimizedImage from '../../components/OptimizedImage/OptimizedImage.jsx';

export default function ProjectDetails() {
    const { id } = useParams();
    const { data } = useProjects();
    const project = data.find(p => p.id === id);

    if (!project) {
        return (
            <AnimatedPage>
                <div className="container flow" style={{ textAlign: 'center' }}>
                    <h2>Project Not Found</h2>
                    <p className="muted">The project you’re looking for doesn’t exist.</p>
                    <Link className="btn" to="/projects">← Back to All Projects</Link>
                </div>
            </AnimatedPage>
        );
    }

    return (
        <AnimatedPage>
            <div className="container flow">
                <h2>{project.title}</h2>
                {project.image && (
                    <OptimizedImage
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        style={{ borderRadius: 'var(--radius)' }}
                    />
                )}
                <p>{project.summary}</p>
                {project.details && <p className="muted">{project.details}</p>}
                {!!project.tags?.length && (
                    <section aria-label="Project tags">
                        <ul className="tags">
                            {project.tags.map(tag => <li key={tag} className="tag">{tag}</li>)}
                        </ul>
                    </section>
                )}
                <div className="card__actions">
                    <Link className="btn" to="/projects">← Back</Link>
                    {project.demo && (
                        <a className="btn btn--primary" href={project.demo} target="_blank" rel="noreferrer" aria-label="View live demo">
                            Live
                        </a>
                    )}
                    {project.download && (
                        <a className="btn btn--primary" href={project.download} target="_blank" rel="noreferrer" aria-label="Download project file">
                            Download
                        </a>
                    )}
                    {project.github && (
                        <a className="btn" href={project.github} target="_blank" rel="noreferrer" aria-label="View GitHub repository">
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </AnimatedPage>
    );
}
