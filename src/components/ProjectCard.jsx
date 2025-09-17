/** @file ProjectCard.jsx
 *  @purpose Reusable card for showcasing a portfolio project.
 *  @props title, summary, tags[], href, image.
 */
export default function ProjectCard({ title, summary, tags = [], href, image }) {
    return (
        <article className="card">
            {image && <img src={image} alt={`${title} screenshot`} className="card-img" />}
            <div className="card-body">
                <h3>{title}</h3>
                <p>{summary}</p>
                {!!tags.length && (
                    <ul className="tags">
                        {tags.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                )}
                {href && <a className="btn" href={href} target="_blank" rel="noreferrer">View</a>}
            </div>
        </article>
    )
}
