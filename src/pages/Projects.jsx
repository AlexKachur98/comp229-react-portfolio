/**
 * @file Projects.jsx
 * @purpose Displays all portfolio projects with a search filter.
 * @description Uses useState hook to filter projects by query string.
 * @autho Alex Kachur
 * @since 2025-09-17
 */

import { useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
    const [query, setQuery] = useState('')

    const filtered = projects.filter((p) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.summary.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    )

    return (
        <section>
            <h2>Projects</h2>
            <input
                type="text"
                placeholder="Search projects..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ padding: '0.5rem', marginBottom: '1rem', width: '100%' }}
            />
            <div className="grid">
                {filtered.length
                    ? filtered.map(p => <ProjectCard key={p.id} {...p} />)
                    : <p>No projects match your search.</p>}
            </div>
        </section>
    )
}
