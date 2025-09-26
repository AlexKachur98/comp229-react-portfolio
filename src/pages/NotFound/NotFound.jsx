/**
 * @file NotFound.jsx
 * @purpose 404 page for unmatched routes. 
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Provides a friendly error message and a navigation link back home. 
 * Wrapped in AnimatedPage for consistent transitions.
 */
import { Link } from 'react-router-dom';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage.jsx';

export default function NotFound() {
    return (
        <AnimatedPage>
            <main role="main" className="section">
                <div className="container flow" style={{ textAlign: 'center' }}>
                    <h2>404 — Page Not Found</h2>
                    <p className="muted">The page you’re looking for doesn’t exist.</p>
                    <Link to="/" className="btn">Go Home</Link>
                </div>
            </main>
        </AnimatedPage>
    );
}
