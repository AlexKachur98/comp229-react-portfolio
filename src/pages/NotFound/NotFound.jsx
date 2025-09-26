/**
 * @file NotFound.jsx
 * @purpose Simple 404 page for unmatched routes.
 * @author Alex Kachur
 * @since 2025-09-17
 */
import { Link } from 'react-router-dom';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage.jsx';

export default function NotFound() {
    return (
        <AnimatedPage>
            <div className="container flow" style={{ textAlign: 'center' }}>
                <h2>404 — Page Not Found</h2>
                <p className="muted">The page you’re looking for doesn’t exist.</p>
                <Link to="/" className="btn">Go Home</Link>
            </div>
        </AnimatedPage>
    );
}