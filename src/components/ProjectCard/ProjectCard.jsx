/**
 * @file ProjectCard.jsx
 * @purpose A reusable, animatable card component for a single project.
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Displays project details and actions. Uses global card styles
 * and Framer Motion for animations.
 */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import OptimizedImage from '../OptimizedImage/OptimizedImage.jsx';

export default function ProjectCard({ id, title, summary, tags = [], image, demo, github, download }) {
    return (
        <motion.article className="card" tabIndex={0}>
            {image && (
                <div className="card__media">
                    <OptimizedImage src={image} alt={`${title} screenshot`} loading="lazy" />
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
        </motion.article>
    );
}