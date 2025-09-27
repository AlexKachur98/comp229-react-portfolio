/**
 * @file Services.jsx
 * @purpose Showcases offered services in card layout with tech logos. 
 * @author Alex Kachur
 * @since 2025-09-26
 * @updated 2025-09-27 Added database, Git, and custom service icons for polish.
 */
import AnimatedPage from '../../components/layout/AnimatedPage/AnimatedPage.jsx';
import ServiceCard from '../../components/ui/ServiceCard/ServiceCard.jsx';
import styles from './Services.module.css';

const services = [
    {
        title: 'General Programming',
        description: 'C#, Java, Python — clean, readable problem solving.',
        logo: '/images/icons/python.svg'
    },
    {
        title: 'Web Development',
        description: 'React, Node.js, JavaScript — responsive and accessible UIs.',
        logo: '/images/icons/react.svg'
    },
    {
        title: 'Databases & SQL',
        description: 'Relational design, queries, and ERDs for normalized schemas.',
        logo: '/images/icons/sql.svg'
    },
    {
        title: 'Version Control',
        description: 'Git & GitHub — branching, merging, and collaboration.',
        logo: '/images/icons/git.svg'
    },
    {
        title: 'Custom PCs',
        description: 'Parts selection, builds, optimization — budget to high-end rigs.',
        logo: '/images/icons/custom-pc.svg'
    },
    {
        title: 'Peer Mentorship',
        description: 'Helping classmates learn faster through code reviews, study tips, and debugging.',
        logo: '/images/icons/mentorship.svg'
    }
];

export default function Services() {
    return (
        <AnimatedPage>
            <div className="container flow">
                <h2>Services</h2>
                <div className={styles.servicesGrid}>
                    {services.map(service => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            logo={service.logo}
                        />
                    ))}
                </div>
                <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
                    <a href="/contact" className="btn btn--primary">
                        Contact Me About Services
                    </a>
                </div>
            </div>
        </AnimatedPage>
    );
}
