/**
 * @file Contact.jsx
 * @purpose Accessible, validated contact form
 * @description Controlled inputs + basic validation. Ready for EmailJS or API later.
 */
import { useState } from 'react'

const emailOk = (v) => /\S+@\S+\.\S+/.test(v)

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [touched, setTouched] = useState({})
    const [sent, setSent] = useState(false)

    const errors = {
        name: form.name.trim() ? '' : 'Name is required.',
        email: emailOk(form.email) ? '' : 'Valid email is required.',
        message: form.message.trim().length >= 10 ? '' : 'Message should be at least 10 characters.'
    }
    const valid = !errors.name && !errors.email && !errors.message

    const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    const onBlur = (e) => setTouched(t => ({ ...t, [e.target.name]: true }))

    const onSubmit = (e) => {
        e.preventDefault()
        setTouched({ name: true, email: true, message: true })
        if (!valid) return
        // TODO: integrate EmailJS or POST to backend
        setSent(true)
        setForm({ name: '', email: '', message: '' })
    }

    return (
        <section className="section">
            <div className="container">
                <h2>Contact</h2>

                <div className="grid-2">
                    {/* Contact info panel */}
                    <div className="contact-panel">
                        <p><strong>Email:</strong> akachur@my.centennialcollege.ca</p>
                        <p><strong>Phone:</strong> 647-281-2180</p>
                        <p><strong>Location:</strong> Thornhill • GTA</p>
                    </div>

                    {/* Form */}
                    <form className="form" onSubmit={onSubmit} noValidate>
                        {sent && <div className="notice" role="status">Thanks! Your message was captured.</div>}

                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name" name="name" className={`input ${touched.name && errors.name ? 'input--error' : ''}`}
                                value={form.name} onChange={onChange} onBlur={onBlur} required
                            />
                            {touched.name && errors.name && <p className="error">{errors.name}</p>}
                        </div>

                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email" name="email" type="email"
                                className={`input ${touched.email && errors.email ? 'input--error' : ''}`}
                                value={form.email} onChange={onChange} onBlur={onBlur} required
                            />
                            {touched.email && errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message" name="message" rows={6}
                                className={`input textarea ${touched.message && errors.message ? 'input--error' : ''}`}
                                value={form.message} onChange={onChange} onBlur={onBlur} required
                            />
                            {touched.message && errors.message && <p className="error">{errors.message}</p>}
                        </div>

                        <button className="btn btn--primary" disabled={!valid}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
