/**
 * @file NotFound.jsx
 * @purpose Simple 404 page
 * @description Keeps UX friendly and provides a fast route back Home. ￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼￼ */
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className="section">
            <div className="container flow">
                <h2>404 — Page not found</h2>
                <p className="muted">The page you’re looking for doesn’t exist.</p>
                <Link to="/" className="btn">Go Home</Link>
            </div>
        </section>
    )
}
