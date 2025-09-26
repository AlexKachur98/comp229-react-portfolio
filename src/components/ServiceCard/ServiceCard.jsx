/**
 * @file ServiceCard.jsx
 * @purpose A reusable UI card for displaying a single service offering. 
 * @author Alex Kachur
 * @since 2025-09-26
 * @description Supports optional logo rendering above the title.
 * Styled using global .card utilities + component-scoped CSS module.
 */
import PropTypes from 'prop-types';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ title, description, logo }) {
    return (
        <article className="card">
            {logo && (
                <div className="card__media">
                    <img src={logo} alt={`${title} icon`} className={styles.logo} />
                </div>
            )}
            <div className="card__body">
                <h3 className="card__title">{title}</h3>
                <p className="muted">{description}</p>
            </div>
        </article>
    );
}

ServiceCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string
};
