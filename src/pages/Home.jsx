/**
 * @file Home.jsx
 * @purpose Hero/landing page with hierarchy + CTAs
 * @description Uses IntersectionObserver to reveal content.
 */
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const heroRef = useRef(null)

    // Small reveal-on-load animation
    useEffect(() => {
        const el = heroRef.current
        if (!el) return
        const obs = new IntersectionObserver((entries, ob) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    el.classList.add('reveal--in')
                    ob.disconnect()
                }
            })
        }, { threshold: 0.2 })
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    return (
        <section className="hero">
            <div ref={heroRef} className="container hero__content reveal">
                <h1 className="hero__title">Alex Kachur</h1>
                <p className="hero__tagline">
                    Software Engineering Technology @ Centennial • React & Node.js •
                    poker + video games + board games • custom PC builder 💻
                </p>
                <div className="hero__cta">
                    <Link to="/projects" className="btn btn--primary">View Projects</Link>
                    <Link to="/about" className="btn">About Me</Link>
                </div>
            </div>
        </section>
    )
}
