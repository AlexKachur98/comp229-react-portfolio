/**
 * @file ProjectCardSkeleton.jsx
 * @purpose A skeleton loader component that mimics the ProjectCard layout.
 * @author Alex Kachur
 * @since 2025-09-26
 * @description Provides a better user experience by showing a visual placeholder
 * while data is being fetched, preventing layout shifts.
 */
export default function ProjectCardSkeleton() {
    return (
        // Uses the global .card utility class from index.css
        <article className="card">
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