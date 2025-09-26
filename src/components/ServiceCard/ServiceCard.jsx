/**
 * @file ServiceCard.jsx
 * @purpose A reusable UI card for displaying a single service.
 * @author Alex Kachur
 * @since 2025-09-17
 * @description A simple presentational component that receives props and renders them
 * using the global utility styles for cards.
 */
export default function ServiceCard({ title, description }) {
    return (
        // This component is styled using the global .card utility classes
        <article className="card">
            <div className="card__body">
                <h3 className="card__title">{title}</h3>
                <p className="muted">{description}</p>
            </div>
        </article>
    );
}