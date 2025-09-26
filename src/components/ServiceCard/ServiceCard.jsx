/**
 * @file ServiceCard.jsx
 * @purpose A reusable UI card for displaying a single service offering. 
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Simple presentational component styled using global .card utilities. 
 * Receives a title and description as props.
 */
import PropTypes from 'prop-types';

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

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};
