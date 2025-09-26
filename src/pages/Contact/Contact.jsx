/**
 * @file Contact.jsx
 * @purpose Accessible, validated contact form with an error summary.
 * @author Alex Kachur
 * @since 2025-09-17
 * @description Controlled inputs + validation. Includes a top-level error summary
 * for improved accessibility upon submission attempt.
 */
import { useState, useMemo } from 'react';
import AnimatedPage from '../../components/AnimatedPage/AnimatedPage.jsx';
import styles from './Contact.module.css';

const emailOk = (v) => /\S+@\S+\.\S+/.test(v);

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [touched, setTouched] = useState({});
    const [sent, setSent] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const errors = useMemo(() => ({
        name: form.name.trim() ? '' : 'Name is required.',
        email: emailOk(form.email) ? '' : 'Valid email is required.',
        message: form.message.trim().length >= 10 ? '' : 'Message must be at least 10 characters.'
    }), [form]);

    const valid = !errors.name && !errors.email && !errors.message;
    const errorList = Object.entries(errors).filter(([, value]) => submitted && value);

    const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    const onBlur = (e) => setTouched(t => ({ ...t, [e.target.name]: true }));

    const onSubmit = (e) => {
        e.preventDefault();
        setTouched({ name: true, email: true, message: true });
        setSubmitted(true);
        if (!valid) return;

        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setSubmitted(false);
    };

    return (
        <AnimatedPage>
            <div className="container">
                <h2>Contact</h2>
                <div className={styles.grid2}>
                    <div className="flow">
                        <p><strong>Email:</strong> <a href="mailto:akachur@my.centennialcollege.ca">akachur@my.centennialcollege.ca</a></p>
                        <p><strong>Phone:</strong> <a href="tel:647-281-2180">647-281-2180</a></p>
                        <p><strong>Location:</strong> Toronto • Canada</p>
                    </div>

                    <form className={styles.form} onSubmit={onSubmit} noValidate>
                        {sent && <div className={styles.notice} role="status">Thanks! Your message was captured.</div>}

                        {errorList.length > 0 && (
                            <div className={styles.errorSummary} role="alert" aria-live="assertive">
                                <h3>Please fix the following errors:</h3>
                                <ul>
                                    {errorList.map(([key, value]) => (
                                        <li key={key}><a href={`#${key}`}>{value}</a></li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className={styles.field}>
                            <label htmlFor="name">Name</label>
                            <input
                                id="name" name="name"
                                className={`${styles.input} ${touched.name && errors.name ? styles.inputError : ''}`}
                                value={form.name} onChange={onChange} onBlur={onBlur} required
                            />
                            {touched.name && errors.name && <p className="error">{errors.name}</p>}
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email" name="email" type="email"
                                className={`${styles.input} ${touched.email && errors.email ? styles.inputError : ''}`}
                                value={form.email} onChange={onChange} onBlur={onBlur} required
                            />
                            {touched.email && errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        <div className={styles.field}>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message" name="message" rows={6}
                                className={`${styles.input} ${styles.textarea} ${touched.message && errors.message ? styles.inputError : ''}`}
                                value={form.message} onChange={onChange} onBlur={onBlur} required
                            />
                            {touched.message && errors.message && <p className="error">{errors.message}</p>}
                        </div>

                        <button className="btn btn--primary" disabled={submitted && !valid}>Send Message</button>
                    </form>
                </div>
            </div>
        </AnimatedPage>
    );
}