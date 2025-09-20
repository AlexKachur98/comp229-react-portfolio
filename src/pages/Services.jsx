/**
 * @file Services.jsx
 * @purpose Displays the services offered in a clean, card-based grid.
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Renders a list of services by mapping over an array and using
 * a reusable ServiceCard component for consistency and maintainability.
 */
import ServiceCard from '../components/ServiceCard.jsx';

// Centralized data for services
const services = [
    {
        title: 'General Programming',
        description: 'C#, Java, some Python — clean, readable problem solving.'
    },
    {
        title: 'Web Development',
        description: 'HTML, CSS, JavaScript, jQuery, React, Node.js — responsive and accessible UIs.'
    },
    {
        title: 'Custom PCs',
        description: 'Parts selection, builds, optimization — budget to high-end rigs.'
    },
    {
        title: 'Peer Mentorship',
        description: 'Help classmates learn faster — code reviews, study tips, debugging.'
    },
];

export default function Services() {
    return (
        <section className="section">
            <div className="container flow">
                <h2>Services</h2>
                <div className="grid">
                    {services.map(service => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}