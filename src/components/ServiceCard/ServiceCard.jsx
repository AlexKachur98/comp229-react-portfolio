/**
 * @file ServiceCard.jsx
 * @purpose A reusable UI card for displaying a single service offering. 
 * @author Alex Kachur
 * @since 2025-09-26
 * @updated 2025-09-27 Updated to render logos beside titles (more professional).
 */
import PropTypes from 'prop-types';
import styles from '../../pages/Services/Services.module.css';

export default function ServiceCard({ title, description, logo }) {
    return (
        <article className="card">
            <div className="card__body">
                <div className={styles.header}>
                    {logo && (
                        <img
                            src={logo}
                            alt=""
                            aria-hidden="true"
                            className={styles.logo}
                        />
                    )}
                    <h3 className="card__title">{title}</h3>
                </div>
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
