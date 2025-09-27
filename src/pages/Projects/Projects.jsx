/**
 * @file Projects.jsx
 * @purpose Filterable, animated project gallery with search and tag filter. 
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Uses a custom hook for project data, Framer Motion for layout animation, 
 * and accessible controls for filtering.
 */
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProjects } from '../../hooks/useProjects.js';
import AnimatedPage from '../../components/layout/AnimatedPage/AnimatedPage.jsx';
import ProjectCard from '../../components/ui/ProjectCard/ProjectCard.jsx';
import ProjectCardSkeleton from '../../components/ui/ProjectCard/ProjectCardSkeleton.jsx';
import styles from './Projects.module.css';

const TAGS = ['all', 'react', 'node', 'design', 'c#', 'javascript', 'jquery', 'uml', 'requirements'];

function highlight(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, i) =>
        regex.test(part) ? <mark key={i}>{part}</mark> : part
    );
}

export default function Projects() {
    const { data, loading, error } = useProjects();
    const [q, setQ] = useState('');
    const [tag, setTag] = useState('all');

    const filtered = useMemo(() => {
        const query = q.trim().toLowerCase();
        return data.filter(p => {
            const textHit = !query || p.title.toLowerCase().includes(query) || p.summary.toLowerCase().includes(query);
            const tagHit = tag === 'all' || (p.tags || []).includes(tag);
            return textHit && tagHit;
        });
    }, [data, q, tag]);

    return (
        <AnimatedPage>
            <div className="container flow">
                <h2>Projects</h2>
                <div className={styles.controls}>
                    <label className="sr-only" htmlFor="search">Search projects</label>
                    <input
                        id="search"
                        className="input"
                        type="search"
                        placeholder="Search by title or summary…"
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                    <div className={styles.chips} role="tablist" aria-label="Filter by tag">
                        {TAGS.map(t => (
                            <button
                                key={t}
                                role="tab"
                                aria-selected={tag === t}
                                className={`${styles.chip} ${tag === t ? styles.chipActive : ''}`}
                                onClick={() => setTag(t)}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {error && <p className="error">Failed to load projects.</p>}

                <motion.div layout className="grid">
                    <AnimatePresence>
                        {loading && Array.from({ length: 3 }).map((_, i) => (
                            <ProjectCardSkeleton key={i} aria-hidden="true" />
                        ))}
                        {!loading && !error && filtered.length === 0 && (
                            <p className="muted">No matches found.</p>
                        )}
                        {filtered.map(p => (
                            <ProjectCard
                                key={p.id}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                {...p}
                                title={highlight(p.title, q)}
                                summary={highlight(p.summary, q)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </AnimatedPage>
    );
}
