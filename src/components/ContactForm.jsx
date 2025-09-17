/**
 * @file ContactForm.jsx
 * @purpose Controlled form to capture contact messages and redirect to Home.
 * @description Demonstrates hook + form handling pattern.
 * @autho Alex Kachur
 * @since 2025-09-17
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const isEmail = (v) => /\S+@\S+\.\S+/.test(v)

export default function ContactForm() {
    const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', message: '' })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

    const validate = () => {
        const next = {}
        if (!form.firstName.trim()) next.firstName = 'First name required'
        if (!form.email.trim() || !isEmail(form.email)) next.email = 'Valid email required'
        if (!form.message.trim()) next.message = 'Message required'
        setErrors(next)
        return Object.keys(next).length === 0
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (!validate()) return
        const messages = JSON.parse(localStorage.getItem('messages') || '[]')
        localStorage.setItem('messages', JSON.stringify([...messages, { ...form, at: new Date().toISOString() }]))
        navigate('/', { state: { flash: 'Thanks! Your message was captured.' } })
    }

    return (
        <form onSubmit={onSubmit} noValidate>
            <div className="grid-2">
                <label>First Name
                    <input name="firstName" value={form.firstName} onChange={onChange} required />
                    {errors.firstName && <small className="error">{errors.firstName}</small>}
                </label>
                <label>Last Name
                    <input name="lastName" value={form.lastName} onChange={onChange} />
                </label>
            </div>

            <div className="grid-2">
                <label>Contact Number
                    <input name="phone" value={form.phone} onChange={onChange} />
                </label>
                <label>Email
                    <input name="email" type="email" value={form.email} onChange={onChange} required />
                    {errors.email && <small className="error">{errors.email}</small>}
                </label>
            </div>

            <label>Message
                <textarea name="message" rows={4} value={form.message} onChange={onChange} required />
                {errors.message && <small className="error">{errors.message}</small>}
            </label>

            <button className="btn">Send</button>
        </form>
    )
}
