/**
 * @file Services.jsx
 * @purpose Displays the services offered in a clean, card-based grid.
 * @author Alex Kachur
 * @since 2025-09-17
 */
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage.jsx';
import ServiceCard from '../../components/ServiceCard/ServiceCard.jsx';

const services = [
    { title: 'General Programming', description: 'C#, Java, some Python — clean, readable problem solving.' },
    { title: 'Web Development', description: 'HTML, CSS, JavaScript, jQuery, React, Node.js — responsive and accessible UIs.' },
    { title: 'Custom PCs', description: 'Parts selection, builds, optimization — budget to high-end rigs.' },
    { title: 'Peer Mentorship', description: 'Help classmates learn faster — code reviews, study tips, debugging.' },
];

export default function Services() {
    return (
        <AnimatedPage>
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
        </AnimatedPage>
    );
}