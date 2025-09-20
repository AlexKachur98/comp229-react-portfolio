/**
 * @file ServiceCard.jsx
 * @purpose A reusable UI card for displaying a single service.
 * @author Alex Kachur
 * @since 2025-09-17
 * @description A component that receives title and description as props to maintain a consistent look.
 */
export default function ServiceCard({ title, description }) {
    return (
        <article className="card">
            <div className="card__body">
                <h3 className="card__title">{title}</h3>
                <p className="muted">{description}</p>
            </div>
        </article>
    );
}