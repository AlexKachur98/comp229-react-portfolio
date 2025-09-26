/**
 * @file ProjectCard.jsx
 * @purpose Reusable, animatable card component for a single project. 
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Displays project details, tags, and action links. 
 * Uses global card utilities and Framer Motion for animation.
 */
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import OptimizedImage from '../OptimizedImage/OptimizedImage.jsx';

const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 }
};

export default function ProjectCard({ id, title, summary, tags = [], image, demo, github, download }) {
    return (
        <motion.article
            className="card"
            variants={variants}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{ duration: 0.3 }}
        >
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
                    {demo && (
                        <a className="btn btn--primary" href={demo} target="_blank" rel="noreferrer" aria-label="View live demo">
                            Live
                        </a>
                    )}
                    {download && (
                        <a className="btn btn--primary" href={download} target="_blank" rel="noreferrer" aria-label="Download project file">
                            Download
                        </a>
                    )}
                    {github && (
                        <a className="btn" href={github} target="_blank" rel="noreferrer" aria-label="View GitHub repository">
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}

ProjectCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    summary: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    demo: PropTypes.string,
    github: PropTypes.string,
    download: PropTypes.string
};
