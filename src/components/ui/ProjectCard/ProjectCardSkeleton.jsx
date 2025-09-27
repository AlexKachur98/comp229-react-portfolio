/**
 * @file ProjectCardSkeleton.jsx
 * @purpose Skeleton loader placeholder for ProjectCard during data fetch. 
 * @autho Alex Kachur
 * @since 2025-09-26
 * @description Mimics the ProjectCard layout to avoid layout shift. 
 * Marked aria-hidden to be ignored by screen readers.
 */
export default function ProjectCardSkeleton() {
    return (
        <article className="card" aria-hidden="true">
            <div className="card__media">
                <div className="skeleton skeleton-img" />
            </div>
            <div className="card__body">
                <div className="skeleton skeleton-h3" />
                <div className="skeleton skeleton-p" />
            </div>
        </article>
    );
}
