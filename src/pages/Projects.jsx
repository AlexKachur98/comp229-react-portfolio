/**
 * @file Projects.jsx
 * @purpose Filterable project gallery using ProjectCard
 * @description Controlled inputs + derived state (useMemo). Includes search + tag chips.
 * */
import { useMemo, useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import { useProjects } from '../hooks/useProjects.js'

const TAGS = ['all', 'react', 'node', 'design', 'c#', 'javascript', 'jquery', 'uml', 'requirements']

export default function Projects() {
    const { data, loading, error } = useProjects()
    const [q, setQ] = useState('')
    const [tag, setTag] = useState('all')

    const filtered = useMemo(() => {
        const query = q.trim().toLowerCase()
        return data.filter(p => {
            const textHit =
                !query ||
                p.title.toLowerCase().includes(query) ||
                p.summary.toLowerCase().includes(query)
            const tagHit = tag === 'all' || (p.tags || []).includes(tag)
            return textHit && tagHit
        })
    }, [data, q, tag])

    return (
        <section className="section">
            <div className="container flow">
                <h2>Projects</h2>

                {/* Controls */}
                <div className="controls">
                    <label className="sr-only" htmlFor="search">Search projects</label>
                    <input
                        id="search"
                        className="input"
                        type="search"
                        placeholder="Search by title or summary…"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />

                    <div className="chips" role="tablist" aria-label="Filter by tag">
                        {TAGS.map(t => (
                            <button
                                key={t}
                                role="tab"
                                aria-selected={tag === t}
                                className={`chip ${tag === t ? 'chip--active' : ''}`}
                                onClick={() => setTag(t)}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* States */}
                {loading && <p>Loading…</p>}
                {error && <p className="error">Failed to load projects.</p>}
                {!loading && !error && filtered.length === 0 && <p className="muted">No matches.</p>}

                {/* Grid */}
                <div className="grid">
                    {filtered.map(p => <ProjectCard key={p.id} {...p} />)}
                </div>
            </div>
        </section>
    )
}
