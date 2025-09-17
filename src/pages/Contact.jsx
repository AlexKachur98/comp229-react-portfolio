/** @file Contact.jsx
 *  @purpose Contact info panel + interactive form (captures and redirects to Home).
 */
import ContactForm from '../components/ContactForm.jsx'

export default function Contact() {
    return (
        <section>
            <h2>Contact</h2>
            <div className="contact-panel">
                <p><strong>Email:</strong> akachur@my.centennialcollege.ca</p>
                <p><strong>Phone:</strong> 647-281-2180</p>
                <p><strong>Location:</strong> Thornhill & the GTA</p>
            </div>

            <h3>Send a message</h3>
            <ContactForm />
        </section>
    )
}