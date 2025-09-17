/** @file Projects.jsx
 *  @purpose Projects page with at least 3 highlighted items + images + role/outcome summary.
 *  @pattern Uses list mapping with stable keys. 
 */
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
    return (
        <section>
            <h2>Projects</h2>
            <div className="grid">
                {projects.map(p => <ProjectCard key={p.id} {...p} />)}
            </div>
        </section>
    )
}
